import { useMutation, useQueryClient } from "react-query";
import VehicleModel from "../../../models/vehicle.model";
import { addVehicle } from "../../../services/vehicles.services";
import "./vehicleForm.css";

interface VehicleFormProps {
  vehicle?: VehicleModel;
  className?: string;
}

export const VehicleForm: React.FC<VehicleFormProps> = ({
  vehicle,
  className,
}) => {
  const queryClient = useQueryClient();

  // add vehicle to database
  const { mutate: newVehicle } = useMutation(addVehicle, {
    onSuccess: () => {
      queryClient.invalidateQueries("vehicles");
    },
  });

  const submitVehicle = (e: any) => {
    e.preventDefault();
    let thisVehicle = {
      brand: e.target[0].value,
      model: e.target[1].value,
      matriculation: e.target[2].value,
      state: e.target[3].value,
      available: e.target[4].value,
      locationPrice: e.target[5].value,
      type: e.target[6].value,
    };
    if (className === "vehicle_form") {
      newVehicle(thisVehicle);
    }
    e.target.reset();
    e.target.style.display = "none";
  };

  return (
    <form name={className} className={className} onSubmit={submitVehicle}>
      <h2 className="title_vehicle_update_form">Modifier véhicule</h2>
      <h2 className="title_vehicle_form">Nouveau véhicule</h2>
      <div className="brand">
        <label htmlFor="brand">Marque:</label>
        <input type="text" name="brand" id="brand" />
      </div>
      <div className="model">
        <label htmlFor="model">Modèle:</label>
        <input type="text" name="model" id="model" />
      </div>
      <div className="matriculation">
        <label htmlFor="matriculation">Immatriculation:</label>
        <input type="text" name="matriculation" id="matriculation" />
      </div>
      <div className="state">
        <label htmlFor="state">Etat:</label>
        <select name="state" id="state">
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
        </select>
      </div>
      <div className="available">
        <label htmlFor="available">Disponible:</label>
        <select name="available" id="available">
          <option value="true">Oui</option>
          <option value="false">Non</option>
        </select>
      </div>
      <div className="locationPrice">
        <label htmlFor="locationPrice">Prix à la journée:</label>
        <input type="number" name="locationPrice" id="locationPrice" />
      </div>
      <div className="type">
        <label htmlFor="type">Type:</label>
        <select name="type" id="type">
          <option value="Voiture">Voiture</option>
          <option value="Moto">Moto</option>
          <option value="Camion">Camion</option>
          <option value="Utilitaire">Utilitaire</option>
        </select>
      </div>
      <button type="submit" id="submit">
        Valider
      </button>
    </form>
  );
};
