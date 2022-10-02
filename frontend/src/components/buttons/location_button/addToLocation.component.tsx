import { MdOutlineCarRental } from "react-icons/md";
import VehicleModel from "../../../models/vehicle.model";
import "./addToLocation.css";

export const AddToLocationButton = ({ vehicle }: { vehicle: VehicleModel }) => {
  return (
    <button
      className="add_to_location_button"
      onClick={() => console.log("add to location vehicle" + vehicle._id)}
    >
      <MdOutlineCarRental />
    </button>
  );
};
