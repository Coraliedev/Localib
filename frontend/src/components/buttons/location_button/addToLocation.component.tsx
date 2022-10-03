import { MdOutlineCarRental } from "react-icons/md";
import ClientModel from "../../../models/client.model";
import VehicleModel from "../../../models/vehicle.model";
import "./addToLocation.css";

interface AddToLocationButtonProps {
  entity: VehicleModel | ClientModel;
  entityName: string;
}

export const AddToLocationButton: React.FC<AddToLocationButtonProps> = ({
  entity,
  entityName,
}) => {
  return (
    <button
      className="add_to_location_button"
      {...(entityName === "vehicle"
        ? { onClick: () => sessionStorage.setItem("vehicle", entity._id) }
        : { onClick: () => sessionStorage.setItem("client", entity._id) })}
    >
      <MdOutlineCarRental />
    </button>
  );
};
