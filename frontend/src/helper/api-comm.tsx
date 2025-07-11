import axios from "axios";

const loginUser = async (email: string, password: string) => {
  const res = await axios.post("/api/v1/login", { email, password });

  if (res.status !== 200) {
    throw new Error("Unable to Login");
  }
  const data = await res.data;

  return data;
};

export default loginUser;
