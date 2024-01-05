import { NativeModules, Platform } from 'react-native';
import { PaymentDetails, ResultCode } from './NativeDojoReactNativePaySdk';
import { ExpoModule } from './NativeDojoReactNativePaySdk';

// Expo module
const DojoReactNativePaySdkExpoModule = ExpoModule;

/**
 * Was the Dojo Expo Module available in the current context 
 * (just serving via `expo start`) will cause the module to be undefined vs `expo run:android`
 * @returns 
 */
export const isExpoModuleAvailable = (): boolean =>
  !!DojoReactNativePaySdkExpoModule;

/**
 * Starts the Dojo Payment flow via the Expo Module proxy
 * @param details 
 * @returns 
 */
export function expoStartPaymentFlow(details: PaymentDetails): Promise<ResultCode> {
  return DojoReactNativePaySdkExpoModule?.startPaymentFlow(details);
}

/**
 * Simple message to display when Expo Module is active
 * @returns 
 */
export function expoHello(): string {
  return DojoReactNativePaySdkExpoModule?.hello();
}

// RN Turbo Module
const LINKING_ERROR =
  `The package '@dojo-engineering/react-native-pay-sdk' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

// @ts-expect-error
const isTurboModuleEnabled = global.__turboModuleProxy != null;

const DojoReactNativePaySdkModule = isTurboModuleEnabled
  ? require('./NativeDojoReactNativePaySdk').default
  : NativeModules.DojoReactNativePaySdk;

const DojoReactNativePaySdk = DojoReactNativePaySdkModule
  ? DojoReactNativePaySdkModule
  : new Proxy(
      {},
      {
        get() {
            console.error(LINKING_ERROR)
          // throw new Error(LINKING_ERROR);
        },
      }
    );

export function startPaymentFlow(details: PaymentDetails): Promise<ResultCode> {
  return DojoReactNativePaySdk.startPaymentFlow(details);
}

export function startSetupFlow(details: PaymentDetails): Promise<ResultCode> {
  return DojoReactNativePaySdk.startSetupFlow(details);
}

export function hello(): string {
  return DojoReactNativePaySdk.hello();
}

export { PaymentDetails, ResultCode };
