package com.dojoreactnativepaysdk

import androidx.activity.ComponentActivity
import com.facebook.react.bridge.Promise
import tech.dojo.pay.uisdk.DojoSDKDropInUI
import tech.dojo.pay.uisdk.presentation.handler.DojoPaymentFlowHandler

object DojoPay {
  var activePromise: Promise? = null
  var dojoPayUI: DojoPaymentFlowHandler? = null

  @JvmStatic
  fun init(activity: ComponentActivity) {
    dojoPayUI = DojoSDKDropInUI.createUIPaymentHandler(activity) { result ->
      activePromise?.let { promise ->
        promise.resolve(result.code)
      }
      activePromise = null
    }
  }
}
