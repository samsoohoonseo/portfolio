import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import MyHeader from '@/components/organisms/MyHeader/MyHeader'
import Providers from '@/app/providers'

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900',
})
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900',
})

export const metadata: Metadata = {
    title: 'Sam S Seo\'s Portfolio',
    description: 'portfolio website',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <Providers>
                    <div className="flex flex-col h-screen">
                        <div className="flex-none">
                            <MyHeader />
                        </div>
                        {children}
                    </div>
                </Providers>
            </body>
        </html>
    )
}
