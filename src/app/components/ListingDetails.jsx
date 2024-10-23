import React from "react";
import { useRouter } from "next/navigation";

const ListingDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      {/* Your Listing Details Component */}
    </div>
  );
};

export default ListingDetails;