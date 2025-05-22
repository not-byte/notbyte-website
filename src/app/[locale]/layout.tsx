import Providers from "@/lib/providers";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";

import "../globals.css";
import Footer from "@/components/Footer";
import {hasLocale, NextIntlClientProvider} from "next-intl";
import {routing} from "@/i18n/routing";
import {notFound} from "next/navigation";

const baseUrl = "https://notbyte.com";

const icons = [
  {
    url: "/dark/favicon.ico",
    type: "image/x-icon",
  },
  {
    url: "/dark/favicon-32x32.png",
    type: "image/png",
    sizes: "32x32",
  },
  {
    url: "/dark/favicon-16x16.png",
    type: "image/png",
    sizes: "16x16",
  },
  {
    url: "/dark/apple-touch-icon.png",
    type: "image/png",
    sizes: "180x180",
    rel: "apple-touch-icon",
  },
  {
    url: "/light/favicon.ico",
    type: "image/x-icon",
    media: "(prefers-color-scheme: dark)",
  },
  {
    url: "/light/favicon-32x32.png",
    type: "image/png",
    sizes: "32x32",
    media: "(prefers-color-scheme: dark)",
  },
  {
    url: "/light/favicon-16x16.png",
    type: "image/png",
    sizes: "16x16",
    media: "(prefers-color-scheme: dark)",
  },
  {
    url: "/light/apple-touch-icon.png",
    type: "image/png",
    sizes: "180x180",
    media: "(prefers-color-scheme: dark)",
    rel: "apple-touch-icon",
  },
];

const authors = [
  {
    name: "Przemek",
    url: "https://github.com/botprzemek",
  },
  {
    name: "Paweł",
    url: "https://github.com/pawelos231",
  },
  {
    name: "Adam",
    url: "https://github.com/akolt19d",
  },
  {
    name: "Łukasz",
    url: "https://github.com/nozowymrozon",
  },
];

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "notByte",
    template: `notByte | %s`,
  },
  description: "Unleash the digital future, with our Web Alchemy.",
  keywords:
    "web development, digital innovation, tech solutions, web alchemy, next.js, web technology, digital transformation, web applications, futuristic technology, software development",
  icons: icons,
  authors: authors,
  manifest: "/site.webmanifest",
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: ReactNode;
  params: Promise<{locale: string}>
}>) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="bg-white dark:bg-night overflow-x-hidden">
        <Providers>
          <NextIntlClientProvider>
            <Navbar />
            {/* not yet used, will be used for some external api calls */}
            <div id="progress_bar"></div>
            <div id="dialog"></div>
            {children}
            <Toaster position="bottom-right" reverseOrder={false} />
            <Footer />
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
