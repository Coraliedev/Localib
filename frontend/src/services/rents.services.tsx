import axios from "axios";

export const getAllRents = async () => {
  const { data } = await axios.get("http://localhost:3001/rent");
  return data;
};