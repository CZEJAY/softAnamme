import Topbar from '@/components/Topbar'
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import LeftSideBar from '@/components/LeftSideBar'
import RightSideBar from '@/components/RightSideBar'
import Bottombar from '@/components/Bottombar'
import { ThemeProvider } from '@/components/providers/Theme-provider'
import { AuthContex } from '@/components/providers/SessionProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Birthmate',
  description: 'Birthmate is a software company',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AuthContex>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            <Topbar />

            <main className="flex flex-row">
              <LeftSideBar />
              <section className="main-container">
                <div className="w-full max-w-4xl">
                  {children}
                </div>
              </section>
              <RightSideBar />
            </main>

            <Bottombar />
          </ThemeProvider>
        </AuthContex>
      </body>
    </html>
  )
}
