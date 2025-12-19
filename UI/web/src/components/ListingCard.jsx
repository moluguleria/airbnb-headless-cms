import { Link } from "react-router-dom";
import "./ListingCard.css";

const STRAPI_URL = "http://localhost:1337";

export default function ListingCard({ listing }) {
  const imageUrl = listing.images?.[0]?.url;

  return (
    <Link to={`/listing/${listing.slug}`} className="listing-card">
      <img
        src={
          imageUrl
            ? `${STRAPI_URL}${imageUrl}`
            : "/placeholder.jpg"
        }
        alt={listing.title}
      />

      <div className="card-body">
        <h3>{listing.title}</h3>
        <p>{listing.location?.name}</p>
        <strong>₹{listing.price} / night</strong>
      </div>
    </Link>
  );
}
