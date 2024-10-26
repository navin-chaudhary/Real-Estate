'use client';

import { useRouter, useParams } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export default function ListingDetailPage() {
  const router = useRouter();
  const params = useParams();
  
  // Get the listing ID from the URL params
  const listingId = params?.id;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => router.back()}
          className="mb-6 text-blue-600 hover:text-blue-800 flex items-center"
        >
          <ArrowLeft className="mr-[4px]" /> Back
        </button>
        
        <h1 className="text-3xl font-bold mb-6">Listing Details {listingId}</h1>
        
        {/* Add your listing details content here */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          {/* Your listing details content */}
        </div>
      </div>
    </div>
  );
}