"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "components/cart/cart-context";
import Price from "components/price";
import { createOrder } from "app/checkout/actions";
import LoadingDots from "components/loading-dots";

// Check if Stripe is enabled
const isStripeEnabled = () => {
  const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
  return (
    publishableKey &&
    publishableKey !== "none" &&
    publishableKey.trim() !== ""
  );
};

export default function CheckoutPage() {
  const { cart } = useCart();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const stripeEnabled = isStripeEnabled();
  const [deliveryType, setDeliveryType] = useState<"address" | "office" | null>(null);
  const [formData, setFormData] = useState({
    customer_name: "",
    customer_email: "",
    customer_phone: "",
    customer_address: "",
    payment_method: "cash_on_delivery" as "cash_on_delivery" | "card",
    comment: "",
    privacy_policy_accepted: false,
  });

  if (!cart || cart.items.length === 0) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <h1 className="mb-4 text-3xl font-bold text-mustard dark:text-mustard">
            Количката е празна
          </h1>
          <p className="mb-8 text-lg text-sage dark:text-sage">
            Моля, добавете продукти в количката преди да финализирате поръчката.
          </p>
          <button
            onClick={() => router.push("/search")}
            className="rounded-lg bg-mustard px-6 py-3 text-white hover:opacity-90 transition-colors"
          >
            Към продуктите
          </button>
        </div>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      // Validate delivery address
      if (!deliveryType || !formData.customer_address.trim()) {
        throw new Error("Моля, изберете тип доставка и попълнете адреса");
      }

      // Format address based on delivery type
      const formattedAddress = deliveryType === "address"
        ? `До точен адрес: ${formData.customer_address}`
        : `До офис на Спийди: ${formData.customer_address}`;

      // Prepare products data
      const products = cart.items.map((item) => ({
        id: item.productId,
        name: item.product.title,
        price: item.price,
        quantity: item.quantity,
      }));

      // Create order
      const order = await createOrder({
        customer_name: formData.customer_name,
        customer_email: formData.customer_email,
        customer_phone: formData.customer_phone || undefined,
        customer_address: formattedAddress,
        products,
        total_price: cart.total,
        payment_method: formData.payment_method,
        comment: formData.comment || undefined,
      });

      // If card payment, redirect to Stripe (only if enabled)
      if (formData.payment_method === "card" && stripeEnabled) {
        // Redirect to Stripe checkout
        const response = await fetch("/api/checkout/create-session", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            orderId: order.id,
            cart: cart,
          }),
        });

        if (!response.ok) {
          throw new Error("Грешка при създаване на сесия за плащане");
        }

        const { url } = await response.json();
        if (url) {
          window.location.href = url;
          return;
        }
      } else {
        // Cash on delivery - redirect to success page
        router.push(`/checkout/success?orderId=${order.id}`);
      }
    } catch (err: any) {
      setError(err.message || "Грешка при създаване на поръчката");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-stone-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-mustard dark:text-mustard mb-8">
          Финализиране на поръчката
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Order Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white dark:bg-stone-400 rounded-lg shadow-lg border border-light-sage p-6">
              <h2 className="text-xl font-semibold mb-6 text-mustard dark:text-mustard">
                Данни за доставка
              </h2>

              {error && (
                <div className="mb-4 p-4 bg-red-100 dark:bg-red-900 border border-red-400 text-red-700 dark:text-red-300 rounded">
                  {error}
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="customer_name"
                    className="block text-sm font-medium text-sage dark:text-sage mb-1"
                  >
                    Име и фамилия *
                  </label>
                  <input
                    type="text"
                    id="customer_name"
                    required
                    value={formData.customer_name}
                    onChange={(e) =>
                      setFormData({ ...formData, customer_name: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-light-sage dark:border-sage rounded-lg focus:ring-2 focus:ring-mustard focus:border-transparent dark:bg-light-sage/20 dark:text-mustard"
                  />
                </div>

                <div>
                  <label
                    htmlFor="customer_email"
                    className="block text-sm font-medium text-sage dark:text-sage mb-1"
                  >
                    Имейл *
                  </label>
                  <input
                    type="email"
                    id="customer_email"
                    required
                    value={formData.customer_email}
                    onChange={(e) =>
                      setFormData({ ...formData, customer_email: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-light-sage dark:border-sage rounded-lg focus:ring-2 focus:ring-mustard focus:border-transparent dark:bg-light-sage/20 dark:text-mustard"
                  />
                </div>

                <div>
                  <label
                    htmlFor="customer_phone"
                    className="block text-sm font-medium text-sage dark:text-sage mb-1"
                  >
                    Телефон
                  </label>
                  <input
                    type="tel"
                    id="customer_phone"
                    value={formData.customer_phone}
                    onChange={(e) =>
                      setFormData({ ...formData, customer_phone: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-light-sage dark:border-sage rounded-lg focus:ring-2 focus:ring-mustard focus:border-transparent dark:bg-light-sage/20 dark:text-mustard"
                  />
                </div>

                {/* Delivery Information */}
                <div className="bg-light-sage/30 dark:bg-light-sage/10 rounded-lg p-6 border border-sage/30 mb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src="https://brcc.bg/storage/773/conversions/speedy-logo-rgb-vector-list.webp"
                      alt="Speedy"
                      className="h-12 object-contain"
                    />
                    <div>
                      <p className="text-base font-semibold text-mustard dark:text-mustard">
                        Изпращаме поръчките само чрез Speedy
                      </p>
                    </div>
                  </div>
                  
                  <label className="block text-sm font-medium text-sage dark:text-sage mb-3">
                    Тип доставка *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                    <button
                      type="button"
                      onClick={() => {
                        setDeliveryType("address");
                        setFormData({ ...formData, customer_address: "" });
                      }}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        deliveryType === "address"
                          ? "border-mustard bg-mustard/10 dark:bg-mustard/20"
                          : "border-light-sage hover:border-sage dark:border-sage/50"
                      }`}
                    >
                      <div className="font-medium text-mustard dark:text-mustard mb-1">
                        До точен адрес
                      </div>
                      <div className="text-xs text-sage dark:text-sage">
                        До вашия адрес
                      </div>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setDeliveryType("office");
                        setFormData({ ...formData, customer_address: "" });
                      }}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        deliveryType === "office"
                          ? "border-mustard bg-mustard/10 dark:bg-mustard/20"
                          : "border-light-sage hover:border-sage dark:border-sage/50"
                      }`}
                    >
                      <div className="font-medium text-mustard dark:text-mustard mb-1">
                        До офис
                      </div>
                      <div className="text-xs text-sage dark:text-sage">
                        До офис на Speedy
                      </div>
                    </button>
                  </div>

                  {deliveryType && (
                    <div className="mt-4">
                      <label
                        htmlFor="customer_address"
                        className="block text-sm font-medium text-sage dark:text-sage mb-2"
                      >
                        {deliveryType === "address"
                          ? "Въведете точен адрес, на който искате да получите пратката *"
                          : "Въведете адреса на офиса на Speedy *"}
                      </label>
                      <textarea
                        id="customer_address"
                        required={deliveryType !== null}
                        rows={3}
                        value={formData.customer_address}
                        onChange={(e) =>
                          setFormData({ ...formData, customer_address: e.target.value })
                        }
                        placeholder={
                          deliveryType === "address"
                            ? "Например: гр. София, ул. Примерна 123, ап. 45"
                            : "Например: гр. София, офис №123"
                        }
                        className="w-full px-4 py-2 border border-light-sage dark:border-sage rounded-lg focus:ring-2 focus:ring-mustard focus:border-transparent dark:bg-light-sage/20 dark:text-mustard"
                      />
                      <p className="mt-2 text-xs text-sage dark:text-sage italic">
                        Ще се свържем с вас, за да потвърдим адреса и поръчката.
                      </p>
                    </div>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="comment"
                    className="block text-sm font-medium text-sage dark:text-sage mb-1"
                  >
                    Коментар (по избор)
                  </label>
                  <textarea
                    id="comment"
                    rows={3}
                    value={formData.comment}
                    onChange={(e) =>
                      setFormData({ ...formData, comment: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-light-sage dark:border-sage rounded-lg focus:ring-2 focus:ring-mustard focus:border-transparent dark:bg-light-sage/20 dark:text-mustard"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-sage dark:text-sage mb-3">
                    Начин на плащане *
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center p-4 border border-light-sage dark:border-sage rounded-lg cursor-pointer hover:bg-light-sage dark:hover:bg-sage/20">
                      <input
                        type="radio"
                        name="payment_method"
                        value="cash_on_delivery"
                        checked={formData.payment_method === "cash_on_delivery"}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            payment_method: e.target.value as "cash_on_delivery" | "card",
                          })
                        }
                        className="mr-3"
                      />
                      <div>
                        <div className="font-medium text-mustard dark:text-mustard">
                          Наложен платеж
                        </div>
                        <div className="text-sm text-sage dark:text-sage">
                          Плащане при получаване на поръчката
                        </div>
                      </div>
                    </label>

                    {stripeEnabled && (
                      <label className="flex items-center p-4 border border-light-sage dark:border-sage rounded-lg cursor-pointer hover:bg-light-sage dark:hover:bg-sage/20">
                        <input
                          type="radio"
                          name="payment_method"
                          value="card"
                          checked={formData.payment_method === "card"}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              payment_method: e.target.value as "cash_on_delivery" | "card",
                            })
                          }
                          className="mr-3"
                        />
                        <div>
                          <div className="font-medium text-mustard dark:text-mustard">
                            Плащане с карта
                          </div>
                          <div className="text-sm text-sage dark:text-sage">
                            Сигурно плащане чрез Stripe
                          </div>
                        </div>
                      </label>
                    )}
                  </div>
                </div>

                <div className="pt-4">
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={formData.privacy_policy_accepted}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          privacy_policy_accepted: e.target.checked,
                        })
                      }
                      className="mt-1 h-4 w-4 text-mustard focus:ring-mustard border-sage rounded"
                    />
                    <span className="text-sm text-sage dark:text-sage">
                      Съгласен съм с{" "}
                      <a
                        href="/privacy-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-mustard dark:text-mustard underline hover:opacity-80 dark:hover:opacity-80"
                      >
                        Политиката за поверителност
                      </a>{" "}
                      и се съгласявам обработката на моите лични данни за целите на поръчката. *
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !formData.privacy_policy_accepted}
                  className="w-full bg-mustard text-white py-3 px-6 rounded-lg font-medium hover:opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <LoadingDots className="bg-white" />
                  ) : (
                    "Финализирай поръчката"
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-stone-400 rounded-xl shadow-xl border-2 border-peach p-8 lg:p-10 sticky top-4 max-w-2xl lg:max-w-none">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-mustard dark:text-mustard">
                Резюме на поръчката
              </h2>

              <div className="space-y-5 mb-8">
                {cart.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-start border-b-2 border-light-sage dark:border-sage/50 pb-4"
                  >
                    <div className="flex-1 pr-4">
                      <p className="text-base md:text-lg font-semibold text-mustard dark:text-mustard mb-1">
                        {item.product.title}
                      </p>
                      <p className="text-sm md:text-base text-sage dark:text-sage">
                        Количество: <span className="font-medium">{item.quantity}</span>
                      </p>
                    </div>
                    <div className="text-right">
                      <Price
                        amount={(item.price * item.quantity).toString()}
                        currencyCode={cart.currency}
                        className="text-base md:text-lg font-bold text-mustard dark:text-mustard"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4 pt-6 border-t-2 border-sage dark:border-sage/50">
                <div className="flex justify-between items-center">
                  <span className="text-base md:text-lg text-sage dark:text-sage font-medium">Междинна сума</span>
                  <Price
                    amount={cart.subtotal.toString()}
                    currencyCode={cart.currency}
                    className="text-base md:text-lg font-semibold text-mustard dark:text-mustard"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-base md:text-lg text-sage dark:text-sage font-medium">Доставка</span>
                  <span className="text-sm md:text-base text-sage dark:text-sage italic">
                    Ще се изчисли при плащане
                  </span>
                </div>
                <div className="flex justify-between items-center pt-4 mt-4 border-t-2 border-mustard/30 dark:border-mustard/30">
                  <span className="text-xl md:text-2xl font-bold text-mustard dark:text-mustard">Общо</span>
                  <Price
                    amount={cart.total.toString()}
                    currencyCode={cart.currency}
                    className="text-xl md:text-2xl font-bold text-mustard dark:text-mustard"
                  />
                </div>
                <div className="mt-6 pt-4 border-t border-light-sage dark:border-sage/30">
                  <p className="text-xs md:text-sm text-center text-sage dark:text-sage italic">
                    Цените се изчисляват по курс 1 EUR = 1.95583 BGN
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
