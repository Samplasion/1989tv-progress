import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "1989 (Taylor's Version) Vault Progress",
  description: 'Shows the current number of solved puzzles.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`max-h-screen`}>{children}</body>
    </html>
  )
}
