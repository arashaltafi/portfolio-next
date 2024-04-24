import type { Metadata, Viewport } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import Cursor from "@/components/Cursor";
import Script from "next/script";

const vazirFont = localFont({
  src: [
    {
      path: '../public/fonts/Vazirmatn-ExtraBold.ttf',
      weight: '800'
    },
    {
      path: '../public/fonts/Vazirmatn-Bold.ttf',
      weight: '700'
    },
    {
      path: '../public/fonts/Vazirmatn-SemiBold.ttf',
      weight: '600'
    },
    {
      path: '../public/fonts/Vazirmatn-Medium.ttf',
      weight: '500'
    },
    {
      path: '../public/fonts/Vazirmatn-Black.ttf',
      weight: '400'
    },
    {
      path: '../public/fonts/Vazirmatn-Light.ttf',
      weight: '300'
    },
    {
      path: '../public/fonts/Vazirmatn-ExtraLight.ttf',
      weight: '200'
    }
  ]
})

export const metadata: Metadata = {
  title: "Arash Altafi",
  description: "Arash Altafi Portfolio",
  authors: [
    {
      name: 'Arash Altafi',
    }
  ],
  icons: {
    icon: "/images/arash.png",
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <Script src='https://arashaltafi.ir/prevent.js' />
      <body
        className={`${vazirFont.className} cursor-default md:cursor-none`}
      >
        <Cursor className="hidden md:block" />
        {children}
      </body>
    </html>
  )
}
