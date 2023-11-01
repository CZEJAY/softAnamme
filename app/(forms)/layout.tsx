import { Metadata } from 'next'
import React from 'react'
import "../globals.css"
import { Toaster } from '@/components/ui/toaster'
import ToastProvider from '@/components/providers/ToastProvider'


export const metadata: Metadata = {
  title: 'Birthmate Authentication',
  description: 'Authenticationpage',
}

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body className='bg-zinc-950 flex w-full h-screen'>
        <ToastProvider>
          {children}
          {/* <div className="flex-1"></div> */}
          {/* <Toaster /> */}
        </ToastProvider>
      </body>
    </html>
  )
}

export default layout