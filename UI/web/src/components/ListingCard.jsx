// ListingCard.jsx
import { Link } from "react-router-dom";

export default function ListingCard({ listing }) {
  return (
    <Link to={`/listing/${listing.slug}`}>
      <img src={listing.images[0]?.url} />
      <h3>{listing.title}</h3>
      <p>${listing.price} / night</p>
    </Link>
  );
}
