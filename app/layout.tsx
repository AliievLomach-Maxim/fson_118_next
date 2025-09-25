import TanstackProvider from '@/components/TanstackProvider/TanstackProvider'
import './globals.css'
import Header from '@/components/Header/Header'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <TanstackProvider>
          <Header />
          {children}
        </TanstackProvider>
      </body>
    </html>
  )
}
