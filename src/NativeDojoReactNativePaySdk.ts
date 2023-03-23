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
  /**
   * Payment intent ID
   */
  intentId: string;

  /**
   * Customer secret token - for managing saved cards
   */
  customerSecret?: string;

  /**
   * Apple pay merchant ID
   *
   * iOS only
   */
  applePayMerchantId?: string;

  /**
   * Should the payment UI use dark theme
   *
   * iOS only
   */
  darkTheme?: boolean;

  /**
   * Should the sdk use sandbox mode
   *
   * Android only
   */
  sandbox?: boolean;

  /**
   * Google Pay merchant ID
   *
   * Android only
   */
  gPayMerchantId?: string;

  /**
   * Dojo location merchant ID
   *
   * Android only
   */
  gPayGatewayMerchantId?: string;

  /**
   * Dojo location merchant name
   *
   * Android only
   */
  gPayMerchantName?: string;
};

export interface Spec extends TurboModule {
  startPaymentFlow(details: PaymentDetails): Promise<number>;
}

export default TurboModuleRegistry.getEnforcing<Spec>('DojoReactNativePaySdk');
