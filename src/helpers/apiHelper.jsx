import axios from "axios";

export const fetchWithAuth = async (url, method = "GET", data = null) => {
  let token = localStorage.getItem("authToken");


  if (!token) {
    const loginResponse = await axios.post(`${import.meta.env.VITE_URL}/api/login`, {
      email: "tutulapi2025@gmail.com",
      password: "TutulHosen",
    });

    token = loginResponse.data.token;
    localStorage.setItem("authToken", token);
  }

  // Make API request
  try {
    const response = await axios({
      url,
      method,
      data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.error("API Request Failed:", error);
    throw error; 
  }
};
