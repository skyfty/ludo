package cn.touchmagic.ludo

import android.util.Log
import android.webkit.WebView
import androidx.annotation.NonNull
import com.xiaomi.billingclient.api.BillingClient
import com.xiaomi.billingclient.api.BillingClientStateListener
import com.xiaomi.billingclient.api.BillingFlowParams
import com.xiaomi.billingclient.api.BillingResult
import com.xiaomi.billingclient.api.PurchasesUpdatedListener
import com.xiaomi.billingclient.api.SkuDetails
import com.xiaomi.billingclient.api.SkuDetailsParams
import io.flutter.embedding.android.FlutterActivity
import io.flutter.embedding.engine.FlutterEngine
import io.flutter.plugin.common.MethodChannel

class MainActivity: FlutterActivity() {
    private val CHANNEL = "touchmagic.com/buy"
    private lateinit var billingClient: BillingClient
    private var skuDetailsList = ArrayList<SkuDetails>()
    init {
        WebView.setWebContentsDebuggingEnabled(true);
    }

    abstract class  Callback() {
        abstract fun payCallback()
    }

    private val purchasesUpdatedListener: PurchasesUpdatedListener =
        PurchasesUpdatedListener { billingResult, list ->
            val code = billingResult.responseCode
            Log.d("TAG", "onPurchasesUpdated.code = $code")
            if (code == BillingClient.BillingResponseCode.PAYMENT_SHOW_DIALOG) { //可根据自己业务需要处理该状态，不可当做交易失败处理
//                resultTv.setText("收银台启动")
            } else if (code == BillingClient.BillingResponseCode.OK) {
                resultCb.success("${code}");
//                resultTv.setText("支付成功")
                if (list != null && list.size > 0) {
//                    purchasesList = list
//                    purchaseListAdapter.updateList(list)
                }
            } else { //其他失败状态  比如断网、服务异常等
                resultCb.success("${code}");
//                resultTv.setText(billingResult.debugMessage)
            }
        }
    private val billingClientStateListener: BillingClientStateListener =
        object : BillingClientStateListener {
            @Override
            override fun onBillingServiceDisconnected() {
                Log.d("TAG", "onBillingServiceDisconnected")
            }

            @Override
            override fun onBillingSetupFinished(billingResult: BillingResult) {
                val code: Int = billingResult.getResponseCode()
//                Log.d("TAG", "Service.code : $code")
//                if (code == BillingClient.BillingResponseCode.OK) {
//                    querySkuList(object : Callback() {
//                        override fun payCallback() {
//                            TODO("Not yet implemented")
//                        }
//                    })
//                }
            }
        }
    fun initSdk() {
        this.billingClient = BillingClient.newBuilder(this).setListener(purchasesUpdatedListener).build()
        this.billingClient.startConnection(billingClientStateListener)
    }
    fun querySkuList(cb:Callback) {
        if (skuDetailsList.isEmpty()) {
            val skuList = arrayOf("gold1000","gold5000","gold10000","gold25000","gold100000","gold500000","gold1000000")
            val params: SkuDetailsParams.Builder = SkuDetailsParams.newBuilder()
            params.setSkusList(skuList.toMutableList()).setType(BillingClient.SkuType.INAPP)
            billingClient.querySkuDetailsAsync(params.build()) { billingResult, list ->
                if (billingResult.responseCode === BillingClient.BillingResponseCode.OK) {
                    skuDetailsList = list as ArrayList<SkuDetails>
                }
                cb.payCallback();
            }
        } else {
            cb.payCallback();
        }
    }


    /**
     * 查询商品
     */
    fun querySkuDetails(): Array<SkuDetails?>? {
        val temp: Array<SkuDetails?> = arrayOfNulls(skuDetailsList.size)
        return skuDetailsList.toArray(temp)
    }

    /**
     * 下单 发起购买
     *
     * @param sku
     */
    fun launchBillingFlow(sku: SkuDetails?, accountId: String?, profileId: String?) {
        val params: BillingFlowParams = BillingFlowParams.newBuilder()
            .setSkuDetails(sku)
            .setObfuscatedAccountId(accountId) //填写开发者真实的ObfuscatedAccountId、ObfuscatedProfileId、WebHookUrl
            .setObfuscatedProfileId(profileId)
            .setWebHookUrl("http://bi.touchmagic.cn")
            .build()
        billingClient.launchBillingFlow(this, params)
    }
    private fun isBillingReady(): Boolean {
        return billingClient.isReady
    }

    lateinit var resultCb:MethodChannel.Result

    private  fun buy(result: MethodChannel.Result, arguments: ArrayList<String>) {
        resultCb = result
        querySkuList(object : Callback() {
            override fun payCallback() {
                for(sku in skuDetailsList) {
                    if (sku.sku == arguments[0]) {
                        launchBillingFlow(sku, "aaaa", "sssss");
                        break;
                    }
                }
            }
        });
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
                    initSdk();
                }
                else-> {
                    result.notImplemented()
                }
            }
//            if (call.method == "buy") {
//                result.success(12)
//
//
////                channel.invokeMethod("getBatteryLevelFromDart", args,
////                    object : MethodChannel.Result {
////                        override fun success(value: Any?) {
////                            //���ý��
////                            result.success("value is ${value}")
////                        }
////
////                        override fun error(
////                            errorCode: String,
////                            errorMessage: String?,
////                            errorDetails: Any?
////                        ) {
////                        }
////
////                        override fun notImplemented() {
////                        }
////
////                    })
//            } else {
//                result.notImplemented()
//            }
        }
    }
}
