import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter_inappwebview/flutter_inappwebview.dart';
import 'package:flutter/services.dart';
import 'package:archive/archive.dart';
import 'package:archive/archive_io.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:mime/mime.dart';
import 'package:flutter_inapp_purchase/flutter_inapp_purchase.dart';

Future main() async {
  WidgetsFlutterBinding.ensureInitialized();
  SystemChrome.setEnabledSystemUIMode(SystemUiMode.manual, overlays: []);

  var bytes = await  rootBundle.load("assets/web.zip");
  Archive archive = ZipDecoder().decodeBytes(bytes.buffer.asUint8List());
  runApp(MaterialApp(home: Game(archive)));
}

// ignore: must_be_immutable
class Game extends StatefulWidget {
  Game(this.archive, {super.key});
  Archive archive;
  @override
  GameState createState() => GameState();
}

class GameState extends State<Game> {
  final GlobalKey webViewKey = GlobalKey();
  static const platform = MethodChannel("touchmagic.com/buy");

  late dynamic _purchaseUpdatedSubscription;
  late dynamic _purchaseErrorSubscription;
  late dynamic _connectionSubscription;
  final List<String> _productLists = Platform.isAndroid
      ? [
    'android.test.purchased',
    'point_1000',
    '5000_point',
    'android.test.canceled',
  ]
      : ['com.cooni.point1000', 'com.cooni.point5000'];

  List<IAPItem> _items = [];
  List<PurchasedItem> _purchases = [];

  @override
  void initState() {
    super.initState();
    initPlatformState();
  }
  @override
  void dispose() {
    if (_connectionSubscription != null) {
      _connectionSubscription.cancel();
      _connectionSubscription = null;
    }
    super.dispose();
  }

  // Platform messages are asynchronous, so we initialize in an async method.
  Future<void> initPlatformState() async {
    // prepare
    var result = await FlutterInappPurchase.instance.initialize();
    print('result: $result');

    // If the widget was removed from the tree while the asynchronous platform
    // message was in flight, we want to discard the reply rather than calling
    // setState to update our non-existent appearance.
    if (!mounted) return;

    // refresh items for android
    try {
      String msg = await FlutterInappPurchase.instance.consumeAll();
      print('consumeAllItems: $msg');
    } catch (err) {
      print('consumeAllItems error: $err');
    }

    _connectionSubscription =
        FlutterInappPurchase.connectionUpdated.listen((connected) {
          print('connected: $connected');
        });

    _purchaseUpdatedSubscription =
        FlutterInappPurchase.purchaseUpdated.listen((productItem) {
          print('purchase-updated: $productItem');
        });

    _purchaseErrorSubscription =
        FlutterInappPurchase.purchaseError.listen((purchaseError) {
          print('purchase-error: $purchaseError');
        });
  }
  void _requestPurchase(IAPItem item) {
    FlutterInappPurchase.instance.requestPurchase(item.productId!);
  }
  Future _getPurchases() async {
    List<PurchasedItem>? items =
    await FlutterInappPurchase.instance.getAvailablePurchases();
    for (var item in items!) {
      print('${item.toString()}');
      this._purchases.add(item);
    }

    setState(() {
      this._items = [];
      this._purchases = items;
    });
  }
  Future _getPurchaseHistory() async {
    List<PurchasedItem>? items =
    await FlutterInappPurchase.instance.getPurchaseHistory();
    for (var item in items!) {
      print('${item.toString()}');
      this._purchases.add(item);
    }

    setState(() {
      this._items = [];
      this._purchases = items;
    });
  }
  InAppWebViewSettings settings = InAppWebViewSettings(
      mediaPlaybackRequiresUserGesture: false,
      useShouldInterceptRequest: true,
      allowsInlineMediaPlayback: true,
      iframeAllow: "camera; microphone",
      iframeAllowFullscreen: true);

  @override
  Widget build(BuildContext context) {
    ScreenUtil.init(
        context,
        designSize: const Size(750, 1334)
    );
    return InAppWebView(
        key: webViewKey,
        initialUrlRequest: URLRequest(url: WebUri("http://www.ccc.com/index.html")),
        initialSettings: settings,
        shouldInterceptRequest: (controller, request) async {
          String url = request.url.toString();
          if (url.startsWith("http://www.ccc.com/")) {
            final archive = widget.archive;
            var assetsPath = url.replaceFirst("http://www.ccc.com/", "", 0);
            var archiveFile = archive.findFile(assetsPath);
            if (archiveFile != null) {
              var content = archiveFile.content as List<int>;
              var mimeType = lookupMimeType(assetsPath);
              return WebResourceResponse(data: Uint8List.fromList(content), contentType: mimeType);
            }
          }
          return null;
        },

        onConsoleMessage: (controller, consoleMessage) {
          print(consoleMessage.message);
          // it will print: {message: {"bar":"bar_value","baz":"baz_value"}, messageLevel: 1}
        },
        onWebViewCreated: (controller) {

          platform.invokeMethod("init");
          controller.addJavaScriptHandler(handlerName: 'buy', callback: (args) async {
             final String result = await platform.invokeMethod("buy", args);
             return result;
             // controller.evaluateJavascript(source:"""window.flutter_inappwebview.callHandler("handlerName").then(function(result) {console.log(result);});""");
          });
        },

    );
  }
}
