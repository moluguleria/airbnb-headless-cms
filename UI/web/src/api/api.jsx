import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:1337/api",
});

export const getListings = () =>
  API.get("/listings?populate=*");

export const getListingBySlug = (slug) =>
  API.get(`/listings?filters[slug][$eq]=${slug}&populate=*`);
