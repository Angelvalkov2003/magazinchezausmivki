import Stripe from "stripe";
import type { Cart } from "./types";

// Check if Stripe is enabled (keys are set and not "none")
const isStripeEnabled = () => {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
  return (
    secretKey &&
    secretKey !== "none" &&
    secretKey.trim() !== "" &&
    publishableKey &&
    publishableKey !== "none" &&
    publishableKey.trim() !== ""
  );
};

// Only initialize Stripe if keys are properly configured
export const stripe = isStripeEnabled()
  ? new Stripe(process.env.STRIPE_SECRET_KEY || "", {
      apiVersion: "2024-11-20.acacia" as any,
    })
  : null;

export async function createCheckoutSession(cart: Cart, successUrl: string, cancelUrl: string) {
  if (!isStripeEnabled() || !stripe) {
    throw new Error("Stripe плащането не е активирано");
  }

  // Ensure currency is always EUR
  const currency = "eur";
  
  const lineItems = cart.items.map((item) => ({
    price_data: {
      currency: currency,
      product_data: {
        name: item.product.title,
        images: item.product.image.url ? [item.product.image.url] : [],
      },
      unit_amount: Math.round(item.price * 100), // Convert to cents
    },
    quantity: item.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: successUrl,
    cancel_url: cancelUrl,
    currency: currency, // Explicitly set currency
    locale: "bg", // Bulgarian language for checkout interface
    metadata: {
      cartId: cart.id || "",
    },
    // Ensure customer email is passed through
    customer_email: undefined, // Will be collected during checkout
  });

  return session;
}

export async function getSession(sessionId: string) {
  if (!isStripeEnabled() || !stripe) {
    throw new Error("Stripe плащането не е активирано");
  }
  return await stripe.checkout.sessions.retrieve(sessionId);
}

// Export helper function to check if Stripe is enabled
export { isStripeEnabled };
