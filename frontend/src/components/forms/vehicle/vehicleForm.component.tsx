import { useMutation, useQueryClient } from "react-query";
import VehicleModel from "../../../models/vehicle.model";
import {
  addVehicle,
  updateVehicleById,
} from "../../../services/vehicles.services";
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
  const { mutate: newVehicle } = useMutation(addVehicle);

  const { mutate: updateVehicle } = useMutation(updateVehicleById);

  const submitVehicle = (e: any) => {
    e.preventDefault();
    let thisVehicle = {
      brand: e.target[0].value,
      model: e.target[1].value,
      matriculation: e.target[2].value,
      state: e.target[3].value,
      locationPrice: e.target[4].value,
      type: e.target[5].value,
    };
    if (className === "vehicle_form") {
      newVehicle(thisVehicle, {
        onSuccess: () => {
          queryClient.setQueriesData("vehicles", (oldData: any) => {
            return [...oldData, thisVehicle];
          });
        },
      });
    }
    if (className === "vehicle_update_form" && vehicle) {
      const VehicleUpdate = [vehicle._id, thisVehicle];
      updateVehicle(VehicleUpdate, {
        onSuccess: () => {
          queryClient.setQueriesData("vehicles", (oldData: any) => {
            return oldData.map((v: VehicleModel) =>
              v._id === vehicle._id ? thisVehicle : v
            );
          });
        },
      });
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
        <input
          type="text"
          name="brand"
          id="brand"
          defaultValue={vehicle?.brand}
        />
      </div>
      <div className="model">
        <label htmlFor="model">Modèle:</label>
        <input
          type="text"
          name="model"
          id="model"
          defaultValue={vehicle?.model}
        />
      </div>
      <div className="matriculation">
        <label htmlFor="matriculation">Immatriculation:</label>
        <input
          type="text"
          name="matriculation"
          id="matriculation"
          defaultValue={vehicle?.matriculation}
        />
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
      <div className="locationPrice">
        <label htmlFor="locationPrice">Prix à la journée:</label>
        <input
          type="number"
          name="locationPrice"
          id="locationPrice"
          defaultValue={vehicle?.locationPrice}
        />
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
