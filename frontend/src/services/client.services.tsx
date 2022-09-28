import axios from "axios";

export const getAllClients = async () => {
  const { data } = await axios.get("http://localhost:3001/client");
  console.log(data[0]._id);
  return data;
};

export const addClient = async () => {
  const response = await axios({
    method: "post",
    url: "http://localhost:3001/client",
    data: {
      lastname: "test",
      firstname: "test",
      phone: "0000000000",
      birthdate: "2021-01-01",
    },
  });
  return response;
};

export const deleteClient = async (id: string) => {
  await axios.delete(`http://localhost:3001/client/${id}`);
};
