import { GrEdit } from "react-icons/gr";
import ClientModel from "../../../models/client.model";
import VehicleModel from "../../../models/vehicle.model";

interface UpdateButtonProps {
  vehicle?: VehicleModel;
  client?: ClientModel;
  onClick: () => void;
  
}

export const UpdateButton: React.FC<UpdateButtonProps> = ({ vehicle, client, onClick}) => {
  return (
    <button
    className="edit_button"
    onClick={() => onClick()}
  >
    <GrEdit />
  </button>
 
  );
}