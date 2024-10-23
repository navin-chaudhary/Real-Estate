import ListingCard from './ListingCard'

export default function FeaturedListings() {
  const listings = [
    {
      id: 1,
      title: "Modern Downtown Apartment",
      location: "123 Main St, City",
      price: "250,000",
      beds: 2,
      baths: 2
    },
    // Add more sample listings
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Listings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings.map(listing => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
    </div>
  )
}