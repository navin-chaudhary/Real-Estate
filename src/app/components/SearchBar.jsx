export default function SearchBar() {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Location"
            className="w-full px-4 py-2 border rounded-md"
          />
          <select className="w-full px-4 py-2 border rounded-md">
            <option>Property Type</option>
            <option>House</option>
            <option>Apartment</option>
            <option>Condo</option>
          </select>
          <select className="w-full px-4 py-2 border rounded-md">
            <option>Price Range</option>
            <option>$100k - $200k</option>
            <option>$200k - $300k</option>
            <option>$300k+</option>
          </select>
          <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Search
          </button>
        </div>
      </div>
    )
  }
  