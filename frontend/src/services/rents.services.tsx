import axios from "axios";

export const getAllRents = async () => {
  const { data } = await axios.get("http://localhost:3001/rent");
  return data;
};

export const addRent = async (rent: any) => {
  const response = await axios({
    method: "post",
    url: "http://localhost:3001/rent",
    data: rent,
  });
  console.log(response);
  return response;
};
