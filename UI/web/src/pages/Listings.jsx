import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getListings } from "../api/api";
import ListingCard from "../components/ListingCard";
import "./Listings.css";

export default function Listings() {
  const { type } = useParams();
  const [listings, setListings] = useState([]);

  useEffect(() => {
    getListings().then((res) => {
      const filtered = res.data.data.filter(
        (l) => l.type === type
      );
      setListings(filtered);
    });
  }, [type]);

  return (
    <div className="grid">
      {listings.map((listing) => (
        <ListingCard
          key={listing.id}
          listing={listing}
        />
      ))}
    </div>
  );
}
