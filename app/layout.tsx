import { CartProvider } from "components/cart/cart-context";
import { ConditionalNavbar } from "components/layout/conditional-navbar";
import Footer from "components/layout/footer";
import { CookieConsent } from "components/cookie-consent";
import { ReactNode } from "react";
import { Toaster } from "sonner";
import "./globals.css";
import { baseUrl } from "lib/utils";

const SITE_NAME = "Магазинче за усмивки";

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  robots: {
    follow: true,
    index: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  // Cart is now loaded from localStorage in CartProvider
  // No need to fetch from database or pass any props

  return (
    <html lang="bg">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Patrick+Hand&family=Fredoka+One&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-neutral-50 text-black selection:bg-teal-300 dark:bg-neutral-900 dark:text-white dark:selection:bg-pink-500 dark:selection:text-white">
        <CartProvider>
          <ConditionalNavbar />
          <main suppressHydrationWarning>
            {children}
            <Toaster closeButton />
          </main>
          <Footer />
          <CookieConsent />
        </CartProvider>
      </body>
    </html>
  );
}
