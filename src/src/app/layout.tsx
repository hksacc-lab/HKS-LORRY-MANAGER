import type { Metadata } from "next"
import { Toaster } from "react-hot-toast"
import "@/styles/globals.css"

export const metadata: Metadata = {
  title: "HKS Lorry Manager - Fleet Management",
  description: "Professional fleet management system for HKS Infra",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "HKS Lorry Manager",
  },
  formatDetection: {
    telephone: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#1E3A8A" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
      </head>
      <body>
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  )
}
