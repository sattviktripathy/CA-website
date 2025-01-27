"use client"

import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Jigar Saraiya - Professional Services",
  description: "Professional accounting and business services by Jigar Saraiya",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      mirror: false,
      easing: "ease-out-cubic",
      disable: "mobile",
    })
  }, [])

  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden`}>{children}</body>
    </html>
  )
}

