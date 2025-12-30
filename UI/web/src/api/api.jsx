import axios from "axios";

export const API = axios.create({
  baseURL: "https://certain-song-d8bae577d2.strapiapp.com/api",
});

/* 🔐 Attach JWT */
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

/* ===== PUBLIC ===== */
export const getListings = () =>
  API.get("/listings?populate=*");

export const getAdminListings = () =>
  API.get(
    "/listings?populate[owner][populate]=*&populate[location]=*"
  );

export const getListingBySlug = (slug) =>
  API.get(`/listings?populate=*&filters[slug][$eq]=${slug}`);

// export const getUsers = () =>
//   API.get("/users");
export const getUsers = () =>
  API.get("/users?populate=role");

/* ===== DASHBOARD ===== */
/* ✅ FILTER BY owner RELATION */
export const getMyListings = () => {
  const token = localStorage.getItem("token");

  return axios.get(
    "https://certain-song-d8bae577d2.strapiapp.com/api/listings?populate=*",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

