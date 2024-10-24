import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-gray-900 h-[800px]">
      <div className="absolute inset-0">
        <Image
          src='/images/homepage.jpg'
          alt="Dynamic city skyline"
          className="w-full h-full object-cover"
          width={2000}
          height={2000}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-transparent opacity-70"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-start">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Find Your Dream Home
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-lg">
          Explore a vast collection of stunning homes, apartments, and luxury
          estates in prime locations.
        </p>
        <div className="mt-6 flex flex-col md:flex-row gap-4">
          <Link
            href="/listings"
            className="inline-block px-8 py-4 bg-indigo-600 text-white text-lg font-semibold rounded-md shadow-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out"
          >
            Explore Now
          </Link>
          <Link
            href="/sell"
            className="inline-block px-8 py-4 border border-indigo-600 text-indigo-600 text-lg font-semibold rounded-md shadow-lg hover:bg-indigo-600 hover:text-white transition-all duration-300 ease-in-out"
          >
            Sell Your Home
          </Link>
        </div>
        <div className="mt-6 w-full max-w-md">
          <input
            type="text"
            placeholder="Search for homes..."
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>
    </section>
  );
}
