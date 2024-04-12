package cn.touchmagic.ludo

import android.os.Bundle
import android.os.CountDownTimer
import android.util.Log
import android.view.Menu
import android.view.MenuItem
import android.view.View
import android.widget.PopupMenu
import android.widget.Toast
import androidx.annotation.NonNull
import io.flutter.embedding.android.FlutterActivity
import io.flutter.embedding.engine.FlutterEngine
import io.flutter.plugin.common.MethodChannel
import com.google.android.gms.ads.AdError
import com.google.android.gms.ads.AdRequest
import com.google.android.gms.ads.FullScreenContentCallback
import com.google.android.gms.ads.LoadAdError
import com.google.android.gms.ads.MobileAds
import com.google.android.gms.ads.OnUserEarnedRewardListener
import com.google.android.gms.ads.rewarded.RewardedAd
import com.google.android.gms.ads.rewarded.RewardedAdLoadCallback
import java.util.concurrent.atomic.AtomicBoolean

const val TAG = "LudoAdMainActivity"
//const val AD_UNIT_ID = "ca-app-pub-3940256099942544/5224354917"
const val AD_UNIT_ID = "ca-app-pub-6424827618816093/2033224598"

class MainActivity: FlutterActivity() {
    private val CHANNEL = "touchmagic.com/buy"
    lateinit var resultCb:MethodChannel.Result

    private var rewardedAd: RewardedAd? = null
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        MobileAds.initialize(this) {}
        loadRewardedAd()

    }
    private fun loadRewardedAd() {
        if (rewardedAd == null) {
            var adRequest = AdRequest.Builder().build()

            Log.d(TAG, "loadRewardedAd.")
            RewardedAd.load(
                this,
                AD_UNIT_ID,
                adRequest,
                object : RewardedAdLoadCallback() {
                    override fun onAdFailedToLoad(adError: LoadAdError) {
                        Log.d(TAG, adError.message)
                        rewardedAd = null
                    }

                    override fun onAdLoaded(ad: RewardedAd) {
                        Log.d(TAG, "Ad was loaded.")
                        rewardedAd = ad
                    }
                }
            )
        }
    }
    private fun showRewardedVideo() {
        Log.d(TAG, "showRewardedVideo.")

        if (rewardedAd != null) {
            rewardedAd?.fullScreenContentCallback =
                object : FullScreenContentCallback() {
                    override fun onAdDismissedFullScreenContent() {
                        Log.d(TAG, "Ad was dismissed.")
                        // Don't forget to set the ad reference to null so you
                        // don't show the ad a second time.
                        rewardedAd = null
                        loadRewardedAd()
                    }

                    override fun onAdFailedToShowFullScreenContent(adError: AdError) {
                        Log.d(TAG, "Ad failed to show.")
                        // Don't forget to set the ad reference to null so you
                        // don't show the ad a second time.
                        rewardedAd = null
                        resultCb.success("-1")
                    }

                    override fun onAdShowedFullScreenContent() {
                        Log.d(TAG, "Ad showed fullscreen content.")
                    }
                }

            rewardedAd?.show(
                this,
                OnUserEarnedRewardListener { rewardItem ->
                    Log.d(TAG, "User earned the reward.")
                    // Handle the reward.
                    val rewardAmount = rewardItem.amount
                    val rewardType = rewardItem.type
                    resultCb.success("0")
                }
            )
        }
    }

    private  fun buy(result: MethodChannel.Result, arguments: ArrayList<String>) {
        resultCb = result
        showRewardedVideo();

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
