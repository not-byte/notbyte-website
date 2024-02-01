import { Inter } from "next/font/google";
import Providers from "@/lib/providers";
import { Navbar } from "@/components/Navbar";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("http://localhost:3000/"),
  title: {
    default: "NotByte",
    template: `%s | NotByte`,
  },
  description: "NotByte website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
          <Toaster position="bottom-right" reverseOrder={false} />
        </Providers>
      </body>
    </html>
  );
}
