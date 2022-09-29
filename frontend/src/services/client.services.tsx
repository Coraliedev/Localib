import axios from "axios";

export const getAllClients = async () => {
  const { data } = await axios.get("http://localhost:3001/client");
  console.log(data[0]._id);
  return data;
};

type update = {
  firstname: String;
  lastname: String;
  email: String;
  phone: String;
  birthdate: String;
};

export const addClient = async (update: update) => {
  const response = await axios({
    method: "post",
    url: "http://localhost:3001/client",
    data: update,
  });
  return response;
};

export const deleteClient = async (id: string) => {
  await axios.delete(`http://localhost:3001/client/${id}`);
};
