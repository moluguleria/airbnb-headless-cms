// Listings.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getListings } from "../api/api";
import ListingCard from "../components/ListingCard";

export default function Listings() {
  const { type } = useParams();
  const [listings, setListings] = useState([]);

  useEffect(() => {
    getListings().then(res => {
      setListings(
        res.data.data.filter(l => l.type === type)
      );
    });
  }, [type]);

  return (
    <div className="grid">
      {listings.map(l => (
        <ListingCard key={l.id} listing={l} />
      ))}
    </div>
  );
}
