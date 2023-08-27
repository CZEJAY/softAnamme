import Topbar from '@/components/Topbar'
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import LeftSideBar from '@/components/LeftSideBar'
import RightSideBar from '@/components/RightSideBar'
import Bottombar from '@/components/Bottombar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Anamme',
  description: 'Anamme is a software company',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Topbar />

        <main className="flex flex-row">
          <LeftSideBar />
          <section className="main-container">
            <div className="w-full max-w-4xl">
              {children}
            </div>
          </section>
          {/* @ts-ignore */}
          <RightSideBar />
        </main>

        <Bottombar />
      </body>
    </html>
  )
}
