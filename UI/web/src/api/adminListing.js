import axios from "axios";

export const fetchAllListings = async () => {
  const token = localStorage.getItem("token");

  const res = await axios.get(
    "https://certain-song-d8bae577d2.strapiapp.com/api/listings?populate=*",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data.data;
};
