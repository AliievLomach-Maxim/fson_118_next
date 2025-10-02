import TanstackProvider from '@/components/TanstackProvider/TanstackProvider'
import './globals.css'
import Header from '@/components/Header/Header'

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode
  modal: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <TanstackProvider>
          <Header />
          {modal}
          {children}
        </TanstackProvider>
      </body>
    </html>
  )
}
