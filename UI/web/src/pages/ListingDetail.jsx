// ListingDetail.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getListingBySlug } from "../api/api";

export default function ListingDetail() {
  const { slug } = useParams();
  const [listing, setListing] = useState(null);

  useEffect(() => {
    getListingBySlug(slug).then(res => {
      setListing(res.data.data[0]);
    });
  }, [slug]);

  if (!listing) return <p>Loading...</p>;

  return (
    <>
      <h1>{listing.title}</h1>
      <p>{listing.description}</p>
      <p>Hosted by {listing.provider?.name}</p>
    </>
  );
}
