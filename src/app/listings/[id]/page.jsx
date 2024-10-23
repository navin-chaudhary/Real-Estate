'use client';

import { useState, useEffect } from 'react';
import ListingDetails from '@/components/ListingDetails';
import ContactAgent from '@/components/ContactAgent';

export default function ListingPage() {
  const [listing, setListing] = useState(null);

  useEffect(() => {
    // Fetch listing data based on the [id] parameter
    // Replace with your actual API call or data fetching logic
    fetch(`/api/listings/${params.id}`)
      .then(res => res.json())
      .then(data => setListing(data));
  }, []);

  if (!listing) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <ListingDetails listing={listing} />
      <ContactAgent agent={listing.agent} />
    </div>
  );
}