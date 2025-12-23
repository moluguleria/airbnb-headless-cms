import axios from "axios";

const API_URL = "http://localhost:1337/api";

export const signupUser = (data) =>
  axios.post(`${API_URL}/auth/local/register`, data);

export const loginUser = async (data) => {
  // 1️⃣ Login
  const loginRes = await axios.post(
    `${API_URL}/auth/local`,
    data
  );

  const token = loginRes.data.jwt;

  // 2️⃣ Fetch user with role populated
  const userRes = await axios.get(
    `${API_URL}/users/me?populate=role`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  // 3️⃣ Return unified response
  return {
    data: {
      jwt: token,
      user: userRes.data,
    },
  };
};
