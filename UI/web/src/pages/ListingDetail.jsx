import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getListingBySlug } from "../api/api";

export default function ListingDetail() {
  const { slug } = useParams();
  const [listing, setListing] = useState(null);

  useEffect(() => {
    getListingBySlug(slug).then((res) => {
      setListing(res.data.data[0]);
    });
  }, [slug]);

  if (!listing) return <p>Loading...</p>;

  return (
    <div style={{ padding: "40px 80px" }}>
      <h1>{listing.title}</h1>
      <p>₹{listing.price} / night</p>

      <div style={{ display: "flex", gap: "12px" }}>
        {listing.images?.map((img, i) => (
          <img
            key={i}
            src={img.url}
            alt=""
            style={{ width: 200 }}
          />
        ))}
      </div>

      <p>
  {listing.description
    ?.map(block =>
      block.children.map(child => child.text).join("")
    )
    .join("\n")}
</p>

      <p>Hosted by {listing.provider?.name}</p>
    </div>
  );
}
