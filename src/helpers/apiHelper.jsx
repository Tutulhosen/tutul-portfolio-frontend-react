import axios from "axios";

export const fetchWithAuth = async (url, method = "GET", data = null) => {
  let token = localStorage.getItem("authToken");


  if (!token) {
    const loginResponse = await axios.post(`${import.meta.env.VITE_URL}/api/login`, {
      email: "tutulhosen2022@gmail.com",
      password: "12345678",
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
