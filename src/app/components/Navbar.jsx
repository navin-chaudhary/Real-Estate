import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-[#d5d6da] shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="text-xl lg:text-3xl font-bold text-gray-800">RealEstate</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4 font-bold">
            <Link href="/" className="text-gray-600 hover:text-gray-900 lg:text-2xl uppercase">
              HOME
            </Link>
            <Link href="/listings" className="text-gray-600 hover:text-gray-900 lg:text-2xl uppercase">
              ABOUT
            </Link>
            <Link href="/listings" className="text-gray-600 hover:text-gray-900 lg:text-2xl">
              PROPERTY
            </Link>
            <Link href="/saved" className="text-gray-600 hover:text-gray-900 lg:text-2xl">
              Saved
            </Link>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              List Property
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
