import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export enum ResultCode {
  successful = 0,
  authorizing = 3,
  referred = 4,
  declined = 5,
  duplicateTransaction = 20,
  failed = 30,
  waitingPreExecute = 99,
  invalidRequest = 400,
  issueWithAccessToken = 401,
  noAccessTokenSupplied = 404,
  internalServerError = 500,
  sdkInternalError = 7770,
}

export type PaymentDetails = {
  intentId: string;
  customerSecret?: string;
  applePayMerchantId?: string;
  darkTheme?: boolean;
  sandbox?: boolean;
};

export interface Spec extends TurboModule {
  startPaymentFlow(details: PaymentDetails): Promise<number>;
}

export default TurboModuleRegistry.getEnforcing<Spec>('DojoReactNativePaySdk');
