import axios from "axios";

export const fetchAllListings = async () => {
  const token = localStorage.getItem("token");

  const res = await axios.get(
    "http://localhost:1337/api/listings?populate=*",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data.data;
};
