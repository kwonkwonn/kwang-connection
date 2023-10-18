import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/app/Components/Header/Header'
import Footer from '@/app/Components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kwang Connection',
  description: 'Connect separated each by technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      </head>
    <body className={inter.className} style={{position:"relative"}}>
        <Header />
        {children}
        <Footer/>
        </body>
    </html>
  )
}
