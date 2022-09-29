import axios from "axios";

export const getAllVehicles = async () => {
  const { data } = await axios.get("http://localhost:3001/vehicle");
  return data;
};

export const addVehicle = async (update: any) => {
  const response = await axios({
    method: "post",
    url: "http://localhost:3001/vehicle",
    data: update,
  });
  return response;
};

export const deleteVehicle = async (id: string) => {
  const response = await axios({
    method: "delete",
    url: "http://localhost:3001/vehicle/" + id,
  });
  return response;
};
