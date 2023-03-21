#import "DojoReactNativePaySdk.h"
#import <React/RCTUtils.h>
@import dojo_ios_sdk_drop_in_ui;

@implementation DojoReactNativePaySdk
RCT_EXPORT_MODULE()

// Example method
// See // https://reactnative.dev/docs/native-modules-ios
RCT_REMAP_METHOD(startPaymentFlow, startPaymentFlow
                 : (NSDictionary &)
                     details resolve
                 : (RCTPromiseResolveBlock)resolve reject
                 : (RCTPromiseRejectBlock)reject) {

  DojoSDKDropInUI *dojoUI = [[DojoSDKDropInUI alloc] init];

//  UIViewController *vc = RCTPresentedViewController();
//
//  DojoUIApplePayConfig *applePayConfig = nil;
//  if (details.applePayMerchantId != nil) {
//    applePayConfig = [[DojoUIApplePayConfig alloc]
//        initWithMerchantIdentifier:details.applePayMerchantId];
//  }
//
//  DojoThemeSettings *theme;
//  if (details.darkTheme == true) {
//    theme = [DojoThemeSettings getDarkTheme];
//  } else {
//    theme = [DojoThemeSettings getLightTheme];
//  }
//
//  [dojoUI startPaymentFlowWithPaymentIntentId:details.intentId
//                                   controller:vc
//                               customerSecret:customerSecret
//                               applePayConfig:applePayConfig
//                                themeSettings:theme
//                                   completion:^(NSInteger result) {
//                                     NSLog(@"%ld", (long)result);
//                                     resolve(result);
//                                   }];
}

// Don't compile this code when we build for the old architecture.
#ifdef RCT_NEW_ARCH_ENABLED
- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params {
  return std::make_shared<facebook::react::NativeDojoReactNativePaySdkSpecJSI>(
      params);
}
#endif

@end
