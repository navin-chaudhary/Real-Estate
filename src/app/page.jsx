import FeaturedListings from './components/FeaturedListings'
import Hero from './components/Hero'
import SearchBar from './components/SearchBar'

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SearchBar />
        <FeaturedListings />
      </div>
    </div>
  )
}
