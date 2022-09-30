import { GrEdit } from "react-icons/gr";
import { RiDeleteBinLine } from "react-icons/ri";
import { useMutation, useQueryClient } from "react-query";
import VehicleModel from "../../models/vehicle.model";
import { deleteVehicle } from "../../services/vehicles.services";
import "./vehicle.css";

interface Vehicleprops {
  vehicle: VehicleModel;
  modifyVehicleValue: (vehicle: VehicleModel) => void;
}

export const Vehicle: React.FC<Vehicleprops> = ({
  vehicle,
  modifyVehicleValue,
}) => {
  const queryClient = useQueryClient();

  // delete vehicle from database
  const { mutate: handleDeleteVehicle } = useMutation(deleteVehicle, {
    onSuccess: () => {
      queryClient.setQueriesData("vehicles", (oldData: any) => {
        return oldData.filter((v: VehicleModel) => v._id !== vehicle._id);
      });
    },
  });

  // display vehicle update form when click on edit button
  const displayEditVehicleForm = () => {
    let vehicleForm = document.getElementsByTagName("form")[1];
    vehicleForm.style.display = "flex";
    modifyVehicleValue(vehicle);
  };

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
      <button className="edit_button" onClick={() => displayEditVehicleForm()}>
        <GrEdit />
      </button>
    </div>
  );
};
