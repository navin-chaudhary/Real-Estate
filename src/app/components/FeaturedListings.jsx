import Link from "next/link";
import ListingCard from "../listings/ListingCard";

export default function FeaturedListings() {
  const listings = [
    {
      id:  1,
      title: "Spacious Modern House in Downtown Gandhinagar",
      location: "193/2, Sector 27, Gandhinagar",
      price: 12000,
      beds: 2,
      baths: 2,
      sqft: 1200,
      type: "House",
      images: [
        "/images/house.png",
      ],
    },
    {
      id: 2,
      title: "Luxurious Villa with Modern Amenities",
      location: "Infocity, Gandhinagar",
      price: 100000,
      beds: 5,
      baths: 4,
      sqft: 1600,
      type: "Villa",
      images: [
        "/images/villa.png",
      ],
    },
    {
      id: 3,
      title: "Affordable 4-Bedroom Flat in Sargasan",
      location: "Sargasan, Gandhinagar",
      price: 15000,
      beds: 4,
      baths: 3,
      sqft: 1400,
      type: "Flat",
      images: [
        "/images/flate.png",
      ],
    },
    {
      id: 4,
      title: "Luxury Penthouse with Scenic Views",
      location: "1045/2, Sector 6, Gandhinagar",
      price: 30000,
      beds: 7,
      baths: 3,
      sqft: 1800,
      type: "Penthouse",
      images: [
        "/images/penthouse.jpg",
      ],
    },
  ];

  return (
    <section className="mx-4 my-8 lg:my-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg md:text-3xl lg:text-4xl font-semibold tracking-wide text-gray-900 dark:text-white">
          Most Popular Properties
        </h2>
        <Link
          href="/listings"
          className="h-10 px-2 sm:px-10 md:px-10 py-2 text-sm md:text-base font-semibold rounded-lg shadow-md bg-teal-500 text-white dark:bg-gray-600 dark:text-white hover:bg-teal-600 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
        >
          View All
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
    </section>
  );
}
