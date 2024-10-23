import ListingDetails from '@/components/ListingDetails'
import ContactAgent from '@/components/ContactAgent'

export default function ListingPage({ params }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <ListingDetails id={params.id} />
        </div>
        <div className="lg:col-span-1">
          <ContactAgent />
        </div>
      </div>
    </div>
  )
}
