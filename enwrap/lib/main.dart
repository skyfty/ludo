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
        }
    );
  }
}
