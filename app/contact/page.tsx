"use client";

import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const siteName = "Магазинче за усмивки";
const contactEmail = "order@magazinchezausmivki.bg";
const contactPhone = "0877349616";
const contactAddress = "гр. София, бул.Янко Сакъзов 36.";
const contactAddressFull = "гр. София, бул.Янко Сакъзов 36 (срещу парк Заимов)";
const facebookUrl = "https://www.facebook.com/share/1BmkCLhfYc/?mibextid=wwXIfr";
const facebookName = "Магазинче за усмивки - цветя и подаръци";
const instagramUrl = "https://www.instagram.com/magazinchezausmivki.shop/";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    privacy_policy_accepted: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    if (!formData.privacy_policy_accepted) {
      setError("Моля, приемете Политиката за поверителност");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Грешка при изпращане на съобщението");
      }

      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        privacy_policy_accepted: false,
      });
    } catch (err: any) {
      setError(err.message || "Грешка при изпращане на съобщението");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-sage py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-mustard dark:text-mustard mb-8 text-center">
          Свържете се с нас
        </h1>

        {/* Contact Information */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-mustard dark:text-mustard mb-8 text-center">
            Контактна информация
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8">
            {/* Address */}
            <div className="flex flex-col items-center text-center space-y-3 p-6 lg:p-8 rounded-xl bg-white dark:bg-sage border border-light-sage shadow-lg lg:col-span-2 lg:col-start-1 lg:mt-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-sage dark:bg-sage/80">
                <MapPinIcon className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-sage dark:text-sage mb-2">
                  Адрес
                </h3>
                <p className="text-base text-mustard dark:text-mustard">
                  {contactAddressFull}
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center text-center space-y-3 p-6 lg:p-8 rounded-xl bg-white dark:bg-sage border border-light-sage shadow-lg lg:col-span-2 lg:col-start-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-sage dark:bg-sage/80">
                <EnvelopeIcon className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-sage dark:text-sage mb-2">
                  Имейл
                </h3>
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-base text-mustard dark:text-mustard hover:opacity-80 transition-colors break-words"
                >
                  {contactEmail}
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center text-center space-y-3 p-6 lg:p-8 rounded-xl bg-white dark:bg-sage border border-light-sage shadow-lg lg:col-span-2 lg:col-start-5">
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-sage dark:bg-sage/80">
                <PhoneIcon className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-sage dark:text-sage mb-2">
                  Телефон
                </h3>
                <a
                  href={`tel:${contactPhone.replace(/\s/g, "")}`}
                  className="text-base text-mustard dark:text-mustard hover:opacity-80 transition-colors"
                >
                  {contactPhone}
                </a>
              </div>
            </div>

            {/* Facebook */}
            <div className="flex flex-col items-center text-center space-y-3 p-6 lg:p-8 rounded-xl bg-white dark:bg-sage border border-light-sage shadow-lg lg:col-span-2 lg:col-start-1">
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-sage dark:bg-sage/80">
                <svg
                  className="h-8 w-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-medium text-sage dark:text-sage mb-2">
                  Facebook
                </h3>
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-mustard dark:text-mustard hover:opacity-80 transition-colors break-words"
                >
                  {facebookName}
                </a>
              </div>
            </div>

            {/* Instagram */}
            <div className="flex flex-col items-center text-center space-y-3 p-6 lg:p-8 rounded-xl bg-white dark:bg-sage border border-light-sage shadow-lg lg:col-span-2 lg:col-start-5">
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-sage dark:bg-sage/80">
                <svg
                  className="h-8 w-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-medium text-sage dark:text-sage mb-2">
                  Instagram
                </h3>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-mustard dark:text-mustard hover:opacity-80 transition-colors"
                >
                  magazinchezausmivki.shop
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mb-12">
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-white via-light-sage/20 to-white dark:from-sage dark:via-sage/10 dark:to-sage rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)] border-2 border-light-sage/50 dark:border-sage/30 p-8 lg:p-12 transform transition-all duration-500 hover:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.5)] hover:scale-[1.01] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-mustard/5 via-transparent to-sage/5 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            <h2 className="text-3xl font-bold text-mustard dark:text-mustard mb-10 text-center relative z-10">
              <span className="relative inline-block">
                Изпратете съобщение
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-mustard to-transparent rounded-full"></span>
              </span>
            </h2>

            {success && (
              <div className="mb-6 p-4 bg-gradient-to-r from-green-100 to-green-50 dark:from-green-900 dark:to-green-800 border-2 border-green-400 dark:border-green-600 text-green-700 dark:text-green-300 rounded-xl shadow-lg animate-fade-in">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">Съобщението ви е изпратено успешно! Ще се свържем с вас скоро.</span>
                </div>
              </div>
            )}

            {error && (
              <div className="mb-6 p-4 bg-gradient-to-r from-red-100 to-red-50 dark:from-red-900 dark:to-red-800 border-2 border-red-400 dark:border-red-600 text-red-700 dark:text-red-300 rounded-xl shadow-lg animate-shake">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">{error}</span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-7 relative z-10">
              <div className="relative group">
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="peer w-full pt-6 pb-3 px-4 border-2 border-light-sage/60 dark:border-sage/40 rounded-xl focus:ring-2 focus:ring-mustard/50 focus:border-mustard dark:bg-light-sage/10 dark:text-mustard transition-all duration-300 hover:border-sage/80 dark:hover:border-sage/60 focus:scale-[1.01] focus:shadow-[0_0_0_4px_rgba(212,175,55,0.1)] bg-white/80 backdrop-blur-sm"
                  placeholder=" "
                />
                <label
                  htmlFor="name"
                  className="absolute left-4 transition-all duration-300 pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-mustard dark:peer-focus:text-mustard peer-focus:font-semibold top-2 text-xs text-mustard dark:text-mustard font-semibold"
                >
                  Име *
                </label>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-mustard to-sage transition-all duration-300 peer-focus:w-full"></div>
              </div>

              <div className="relative group">
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="peer w-full pt-6 pb-3 px-4 border-2 border-light-sage/60 dark:border-sage/40 rounded-xl focus:ring-2 focus:ring-mustard/50 focus:border-mustard dark:bg-light-sage/10 dark:text-mustard transition-all duration-300 hover:border-sage/80 dark:hover:border-sage/60 focus:scale-[1.01] focus:shadow-[0_0_0_4px_rgba(212,175,55,0.1)] bg-white/80 backdrop-blur-sm"
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className="absolute left-4 transition-all duration-300 pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-mustard dark:peer-focus:text-mustard peer-focus:font-semibold top-2 text-xs text-mustard dark:text-mustard font-semibold"
                >
                  Имейл *
                </label>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-mustard to-sage transition-all duration-300 peer-focus:w-full"></div>
              </div>

              <div className="relative group">
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="peer w-full pt-6 pb-3 px-4 border-2 border-light-sage/60 dark:border-sage/40 rounded-xl focus:ring-2 focus:ring-mustard/50 focus:border-mustard dark:bg-light-sage/10 dark:text-mustard transition-all duration-300 hover:border-sage/80 dark:hover:border-sage/60 focus:scale-[1.01] focus:shadow-[0_0_0_4px_rgba(212,175,55,0.1)] bg-white/80 backdrop-blur-sm"
                  placeholder=" "
                />
                <label
                  htmlFor="phone"
                  className="absolute left-4 transition-all duration-300 pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-mustard dark:peer-focus:text-mustard peer-focus:font-semibold top-2 text-xs text-mustard dark:text-mustard font-semibold"
                >
                  Телефон *
                </label>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-mustard to-sage transition-all duration-300 peer-focus:w-full"></div>
              </div>

              <div className="relative group">
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="peer w-full pt-6 pb-3 px-4 border-2 border-light-sage/60 dark:border-sage/40 rounded-xl focus:ring-2 focus:ring-mustard/50 focus:border-mustard dark:bg-light-sage/10 dark:text-mustard transition-all duration-300 hover:border-sage/80 dark:hover:border-sage/60 focus:scale-[1.01] focus:shadow-[0_0_0_4px_rgba(212,175,55,0.1)] bg-white/80 backdrop-blur-sm resize-none"
                  placeholder=" "
                />
                <label
                  htmlFor="message"
                  className="absolute left-4 transition-all duration-300 pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-mustard dark:peer-focus:text-mustard peer-focus:font-semibold top-2 text-xs text-mustard dark:text-mustard font-semibold"
                >
                  Съобщение *
                </label>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-mustard to-sage transition-all duration-300 peer-focus:w-full"></div>
              </div>

              <div className="pt-3">
                <label className="flex items-start space-x-3 cursor-pointer group/checkbox p-4 rounded-xl bg-light-sage/30 dark:bg-sage/10 border border-light-sage/50 dark:border-sage/30 hover:bg-light-sage/40 dark:hover:bg-sage/20 transition-all duration-300">
                  <div className="relative flex items-center justify-center mt-1">
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
                      className="sr-only"
                    />
                    <div className={`w-6 h-6 border-2 rounded-md transition-all duration-300 flex items-center justify-center ${
                      formData.privacy_policy_accepted
                        ? "bg-gradient-to-br from-mustard to-mustard/90 border-mustard shadow-lg shadow-mustard/30 scale-110"
                        : "border-gray-300 dark:border-gray-500 group-hover/checkbox:border-sage group-hover/checkbox:scale-105"
                    }`}>
                      {formData.privacy_policy_accepted && (
                        <svg className="w-4 h-4 text-white animate-check-in" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <span className="text-sm text-gray-700 dark:text-gray-300 flex-1 leading-relaxed pt-0.5">
                    Съгласен съм с{" "}
                    <a
                      href="/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-mustard dark:text-mustard underline hover:text-sage dark:hover:text-sage transition-colors font-semibold decoration-2 underline-offset-2"
                    >
                      Политиката за поверителност
                    </a>{" "}
                    и се съгласявам обработката на моите лични данни. *
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !formData.privacy_policy_accepted}
                className="w-full bg-gradient-to-r from-mustard via-mustard/95 to-mustard/90 text-white py-5 px-8 rounded-xl font-semibold text-lg shadow-[0_10px_30px_-10px_rgba(212,175,55,0.4)] hover:shadow-[0_15px_40px_-10px_rgba(212,175,55,0.5)] transform transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-[0_10px_30px_-10px_rgba(212,175,55,0.4)] relative overflow-hidden group mt-2"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-mustard/90 via-mustard to-mustard/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Изпращане...
                    </>
                  ) : (
                    <>
                      Изпрати съобщение
                      <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </>
                  )}
                </span>
              </button>
            </form>
          </div>
        </div>

        {/* Google Maps */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-mustard dark:text-mustard mb-6 text-center">
            Намерете ни на картата
          </h2>
          <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg border border-light-sage">
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(contactAddress)}&output=embed&zoom=15`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Магазинче за усмивки - ${contactAddress}`}
            ></iframe>
          </div>
          <p className="text-center text-gray-600 dark:text-gray-400 mt-4">
            {contactAddress}
          </p>
        </div>
      </div>
    </div>
  );
}
