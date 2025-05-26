import type { Metadata } from 'next'
import './globals.css'
import AudioPlayer from '@/components/music-player'

export const metadata: Metadata = {
  title: 'HELLO YOU !',
  description: 'Make and own by ZLS',
  generator: 'ZLS',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <AudioPlayer /> {/* Nút điều khiển nhạc */}
      </body>
    </html>
  )
}
