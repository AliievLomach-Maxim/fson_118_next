import TanstackProvider from '@/components/TanstackProvider/TanstackProvider'
import './globals.css'
import Header from '@/components/Header/Header'
import { Metadata } from 'next'
import { Roboto, Padauk } from 'next/font/google'

const roboto = Roboto({
  weight: '600',
  variable: '--roboto-font',
  subsets: ['latin'],
})

const padauk = Padauk({
  weight: '700',
  variable: '--padauk-font',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'NoteHUB',
  description: 'Some super site',
}

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode
  modal: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${roboto.variable} ${padauk.variable}`}>
        <TanstackProvider>
          <Header />
          {modal}
          {children}
        </TanstackProvider>
      </body>
    </html>
  )
}
