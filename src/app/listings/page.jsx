import ListingGrid from '../components/ListingGrid'
import ListingFilters from '../components/ListingFilters'

export default function ListingsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      {/* <div className="grid grid-cols-1 lg:grid-cols-4 gap-8"> */}
        {/* <div className="lg:col-span-1">
          <ListingFilters />
        </div> */}
        <div className="lg:col-span-3">
          <ListingGrid />
        </div>
      {/* </div> */}
    </div>
  )
}