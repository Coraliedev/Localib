import { RiDeleteBinLine } from "react-icons/ri";
import { useMutation, useQueryClient } from "react-query";
import VehicleModel from "../../models/vehicle.model";
import { deleteVehicle } from "../../services/vehicles.services";
import "./vehicle.css";

interface Vehicleprops {
  vehicle: VehicleModel;
}

export const Vehicle: React.FC<Vehicleprops> = ({ vehicle }) => {
  const queryClient = useQueryClient();

  // delete vehicle from database
  const { mutate: handleDeleteVehicle } = useMutation(deleteVehicle, {
    onSuccess: () => {
      queryClient.invalidateQueries("vehicles");
    },
  });

  return (
    <div className="vehicle">
      <div>
        <p>
          <span>Marque</span> : {vehicle.brand}
        </p>
        <p>
          <span>Modèle</span> : {vehicle.model}
        </p>

        <p>
          <span>Immatriculation</span> : {vehicle.matriculation}
        </p>
        <p>
          <span>Etat</span> : {vehicle.state}
        </p>
        <p>
          <span>Disponible</span> : {vehicle.available ? "Oui" : "Non"}
        </p>
        <p>
          <span>Prix à la journée</span> : {vehicle.locationPrice} €
        </p>
        <p>
          <span>Type</span> : {vehicle.type}
        </p>
      </div>
      <button
        className="delete_button"
        onClick={() => handleDeleteVehicle(vehicle._id)}
      >
        <RiDeleteBinLine />
      </button>
    </div>
  );
};
