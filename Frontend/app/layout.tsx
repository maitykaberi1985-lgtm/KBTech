import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { AuthProvider } from './context/AuthContext';
import { ChatWidget } from './components/chat-widget';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'KBTech | Kanan Biotech Pvt. Ltd. — Aquaculture Solutions',
  description:
    'KBTech by Kanan Biotech Pvt. Ltd. — premium fish health products, feed management, disease guidance and a farmer marketplace to buy & sell fish.',
  generator: 'KananBiotech.com',
  icons: {
    icon: '/kanan-biotech-logo.png',
    apple: '/kanan-biotech-logo.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#2fae8f',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} bg-background`}>
      <body className={`font-sans antialiased`}>
        <AuthProvider>
          {children}
          <ChatWidget />
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  )
}
