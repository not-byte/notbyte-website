import Providers from '@/lib/providers'
import { ReactNode } from 'react'
import { Navbar } from '@/components/Navbar'
import { Toaster } from 'react-hot-toast'
import './globals.css'

const icons = [
  {
    url: 'dark/favicon.ico',
    type: 'image/x-icon',
  },
  {
    url: 'dark/favicon-32x32.png',
    type: 'image/png',
    sizes: '32x32',
  },
  {
    url: 'dark/favicon-16x16.png',
    type: 'image/png',
    sizes: '16x16',
  },
  {
    url: 'dark/apple-touch-icon.png',
    type: 'image/png',
    sizes: '180x180',
    rel: 'apple-touch-icon',
  },
  {
    url: 'light/favicon.ico',
    type: 'image/x-icon',
    media: '(prefers-color-scheme: dark)',
  },
  {
    url: 'light/favicon-32x32.png',
    type: 'image/png',
    sizes: '32x32',
    media: '(prefers-color-scheme: dark)',
  },
  {
    url: 'light/favicon-16x16.png',
    type: 'image/png',
    sizes: '16x16',
    media: '(prefers-color-scheme: dark)',
  },
  {
    url: 'light/apple-touch-icon.png',
    type: 'image/png',
    sizes: '180x180',
    media: '(prefers-color-scheme: dark)',
    rel: 'apple-touch-icon',
  },
]

const authors = [
  {
    name: 'Przemek',
    url: 'https://github.com/botprzemek',
  },
  {
    name: 'Paweł',
    url: 'https://github.com/pawelos231',
  },
  {
    name: 'Adam',
    url: 'https://github.com/akolt19d',
  },
  {
    name: 'Łukasz',
    url: 'https://github.com/nozowymrozon',
  }
]

export const metadata = {
  metadataBase: new URL('http://localhost:3000/'),
  title: {
    default: 'notByte',
    template: `%s | notByte`,
  },
  description: 'Unleash the digital future, with our Web Alchemy.',
  keywords: '',
  icons: icons,
  authors: authors,
  manifest: '/site.webmanifest'
}
;

export default function RootLayout({
                                     children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar/>
          {children}
          <Toaster position="bottom-right" reverseOrder={false}/>
        </Providers>
      </body>
    </html>
  );
}
