import {
  Stripe,
  StripeCardCvcElement,
  StripeCardExpiryElement,
  StripeCardNumberElement,
  PaymentRequestPaymentMethodEvent,
  PaymentRequestShippingOptionEvent,
  PaymentRequestShippingAddressEvent,
  PaymentRequestOptions,
  PaymentIntentResult,
  SetupIntentResult,
} from '@stripe/stripe-js';

/**
 * Internal util types
 */
export type StringifyBoolean = 'true' | 'false';

/**
 * Event object of `formSubmit` event
 */
export type FormSubmitEvent = {
  stripe: Stripe;
  cardNumberElement: StripeCardNumberElement;
  cardExpiryElement: StripeCardExpiryElement;
  cardCVCElement: StripeCardCvcElement;
  intentClientSecret?: string;
  zipCode?: string;
};
/**
 * Handler function of the `formSubmit` event
 */
export type FormSubmitHandler = (event: Event, props: FormSubmitEvent) => Promise<void>;

/**
 * Event object of `stripeLoaded` event
 */
export type StripeLoadedEvent = {
  stripe: Stripe;
};
/**
 * Handler function of the `stripeLoaded` event
 */
export type StripeDidLoadedHandler = (event: StripeLoadedEvent) => Promise<void>;

/**
 * Activity progress status
 */
export type ProgressStatus = '' | 'loading' | 'success' | 'failure';

/**
 * PaymentRequest Button API handlers
 */
export type PaymentRequestPaymentMethodEventHandler = (event: PaymentRequestPaymentMethodEvent, stripe: Stripe) => Promise<void>;
export type PaymentRequestShippingOptionEventHandler = (event: PaymentRequestShippingOptionEvent, stripe: Stripe) => Promise<void>;
export type PaymentRequestShippingAddressEventHandler = (event: PaymentRequestShippingAddressEvent, stripe: Stripe) => Promise<void>;

/**
 * PaymentRequest Button options
 */
export type PaymentRequestButtonOption = PaymentRequestOptions & {
  paymentRequestPaymentMethodHandler?: PaymentRequestPaymentMethodEventHandler;
  paymentRequestShippingAddressChangeHandler?: PaymentRequestShippingAddressEventHandler;
  paymentRequestShippingOptionChangeHandler?: PaymentRequestShippingOptionEventHandler;
};

/**
 * Stripe XXXIntent types
 */
export type IntentType = 'setup' | 'payment';
export type DefaultFormSubmitResult = Error | PaymentIntentResult | SetupIntentResult;

/**
 * Stripe.js client options
 * @see https://stripe.com/docs/js/initializing#init_stripe_js-options
 */
export type InitStripeOptions = {
  stripeAccount?: string;
}