// app/layout.tsx
import './globals.css'
import React from 'react'

// Metadata (define only once)
export const metadata = {
  title: 'Landing Page',
  description: 'My Landing Page built with Next.js + Tailwind',
}

// RootLayout (define only once)
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
