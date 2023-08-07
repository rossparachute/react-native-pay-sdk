package com.dojoreactnativepaysdk

import android.content.Context
import com.facebook.react.bridge.Callback
import com.facebook.react.bridge.PromiseImpl
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReadableMap
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import expo.modules.kotlin.Promise
import expo.modules.kotlin.exception.CodedException
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch

/***
 * An implementation of an Expo Module which acts as a proxy wrapper
 * for the original React Native TurboModule implementation.
 */
open class DojoReactNativePaySdkExpoModule : Module() {
  /**
   * Android context that gets populated whenever a func in the ModuleDefinition is called
   */
  private val context
    get() = requireNotNull(appContext.reactContext)

  /**
   * Creates the Expo Module definition that describes the module's API
   */
  override fun definition() = ModuleDefinition {
    // Common
    Name(NAME)

    Function(HELLO_FN_NAME, {
      "Hello, Dojo! 👋"
    })

    AsyncFunction(START_PAYMENT_FLOW_FN_NAME) { details: ReadableMap, promise: Promise ->
      GlobalScope.launch(Dispatchers.Main) {
        startPaymentFlow(details, promise)
      }
    }
  }

  /**
   * Returns an instance of the original React Native Turbo Module
   * @param context The current Android context
   * @return DojoReactNativePaySdkModule - An instance of the original RN TurboModule
   * */
  private fun getTurboModuleInstance(context: Context): DojoReactNativePaySdkModule {
    return DojoReactNativePaySdkModule(ReactApplicationContext(context))
  }

  /**
   * Starts the Dojo Payment Flow via an instance of the RN TurboModule and its Dojo SDK
   * @param details A ReadableMap key-value pair of args passed to the JS function that configure the request
   * @param promise The promise that will be returned to the Expo JS context
   * @return Unit A unit of work representing payment operations
   */
  private fun startPaymentFlow(details: ReadableMap, promise: Promise) {
    var sdkModule = getTurboModuleInstance(context)

    // We'll need to translate a bit between Expo promises (in)
    // to the parameters the TurboModule uses from com.facebook.react.bridge.Callback
    // and then the Expo promises back out
    var resolveCallback = Callback { value: Any ->
      return@Callback promise.resolve(value)
    }

    var rejectCallback = Callback { ex: Any ->
      return@Callback promise.reject(ex as CodedException)
    }

    var rnPromise = PromiseImpl(resolveCallback, rejectCallback)

    sdkModule.startPaymentFlow(
      details,
      rnPromise
    )
  }

  companion object {
    const val NAME = "DojoReactNativePaySdkExpo"
    const val HELLO_FN_NAME = "hello"
    const val START_PAYMENT_FLOW_FN_NAME = "startPaymentFlow"
  }
}
