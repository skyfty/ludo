package cn.touchmagic.ludo

import androidx.annotation.NonNull
import io.flutter.embedding.android.FlutterActivity
import io.flutter.embedding.engine.FlutterEngine
import io.flutter.plugin.common.MethodChannel

class MainActivity: FlutterActivity() {
    private val CHANNEL = "touchmagic.com/buy"
    lateinit var resultCb:MethodChannel.Result
    private  fun buy(result: MethodChannel.Result, arguments: ArrayList<String>) {
        resultCb = result
    }

    override fun configureFlutterEngine(@NonNull flutterEngine: FlutterEngine) {
        super.configureFlutterEngine(flutterEngine)
        val channel = MethodChannel(flutterEngine.dartExecutor.binaryMessenger, CHANNEL)
        channel.setMethodCallHandler {call, result ->
            when(call.method) {
                "buy"->{
                    buy(result, call.arguments as ArrayList<String>)
                }
                "init"->{
                }
                else-> {
                    result.notImplemented()
                }
            }
        }
    }
}
