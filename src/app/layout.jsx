import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'HomeFinder',
  description: 'Find your dream home',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen dark:bg-gray-900 bg-white overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 