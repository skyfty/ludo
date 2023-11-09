import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter_inappwebview/flutter_inappwebview.dart';
import 'package:flutter/services.dart';
import 'package:archive/archive.dart';
import 'package:archive/archive_io.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:mime/mime.dart';
import 'package:in_app_purchase/in_app_purchase.dart';

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
const List<String> _kProductIds = <String>[
  'cn.touchmagic.cn.test1',
  'gold5000',
  'com.touchmagicn.ludo.gold'
];

class GameState extends State<Game> {
  final GlobalKey webViewKey = GlobalKey();
  static const platform = MethodChannel("touchmagic.com/buy");
  late StreamSubscription<List<PurchaseDetails>> _subscription;

  final InAppPurchase _inAppPurchase = InAppPurchase.instance;
  List<ProductDetails> _products = <ProductDetails>[];

  /// 内购的购买更新监听
  void _listenToPurchaseUpdated(List<PurchaseDetails> purchaseDetailsList) async {
    for (PurchaseDetails purchase in purchaseDetailsList) {
      if (purchase.status == PurchaseStatus.pending) {
        // 等待支付完成
        // _handlePending();
      } else if (purchase.status == PurchaseStatus.error) {
        // 购买失败
        // _handleError(purchase.error);
      } else if (purchase.status == PurchaseStatus.purchased || purchase.status == PurchaseStatus.restored) {
        //完成购买, 到服务器验证
        // if (Device.isAndroid) {
        //   var googleDetail = purchase as GooglePlayPurchaseDetails;
        //   loadAndroidGetPayInfo(googleDetail);
        // }
      }
    }
  }

  // 根据产品ID获取产品信息
  ProductDetails _getProduct(String productId) {
    return _products.firstWhere((product) => product.id == productId);
  }

  @override
  void initState() {
    final Stream<List<PurchaseDetails>> purchaseUpdated = _inAppPurchase.purchaseStream;
    _subscription = purchaseUpdated.listen((purchaseDetailsList) {
      _listenToPurchaseUpdated(purchaseDetailsList);
    }, onDone: () {
    }, onError: (error) {
      error.printError();
    });
    initStoreInfo();
    super.initState();
  }
  Future<void> initStoreInfo() async {
    final bool isAvailable = await _inAppPurchase.isAvailable();
    if (!isAvailable) {
      setState(() {
        _products = <ProductDetails>[];
      });
      return;
    }
    final ProductDetailsResponse productDetailResponse = await _inAppPurchase.queryProductDetails(_kProductIds.toSet());
    if (productDetailResponse.notFoundIDs.isNotEmpty) {
      return;
    }
    setState(() {
      _products = productDetailResponse.productDetails;
    });
  }

  @override
  void dispose() {
    _subscription.cancel();
    super.dispose();
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
          // platform.invokeMethod("init");
          controller.addJavaScriptHandler(handlerName: 'buy', callback: (args) async {
            if (_products.isNotEmpty) {
              ProductDetails productDetails = _getProduct(args[0]);
              // Log.d("一切正常，开始购买,信息如下：title: ${productDetails.title}  desc:${productDetails.description} "
              //     "price:${productDetails.price}  currencyCode:${productDetails.currencyCode}  currencySymbol:${productDetails.currencySymbol}");
              var b = await _inAppPurchase.buyConsumable(purchaseParam: PurchaseParam(productDetails: productDetails));
              return b ? "0":"-1";
            } else {
              return "-1";
            }
          });
          controller.addJavaScriptHandler(handlerName: 'skus', callback: (args) async {




            final Map<Object?, Object?> result = await platform.invokeMethod("skus", args);
            return result;
            // controller.evaluateJavascript(source:"""window.flutter_inappwebview.callHandler("handlerName").then(function(result) {console.log(result);});""");
          });
        }
    );
  }
}
