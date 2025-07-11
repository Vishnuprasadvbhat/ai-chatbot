import axios from "axios";

const loginUser = async (email: string, password: string) => {
  try {
    const res = await axios.post("/user/login", { email, password });
    if (res.status != 200) {
      throw new Error("Unable to Login");
    }
    const data = res.data;

    return data;
  } catch (error) {
    // Optionally, you can inspect error.response for more details
    throw new Error("Network or server error occurred during login.");
  }
};

export default loginUser;