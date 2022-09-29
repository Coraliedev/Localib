import axios from "axios";

export const getAllVehicles = async () => {
  const { data } = await axios.get("http://localhost:3001/vehicle");
  return data;
};

export const addVehicle = async () => {
  const response = await axios({
    method: "post",
    url: "http://localhost:3001/vehicle",
    data: {
      brand: "marque",
      model: "modèle",
      matriculation: "immatriculation",
      state: "A",
      available: true,
      locationPrice: 50,
      type: "Voiture",
    },
  });
  console.log(response);
  return response;
};