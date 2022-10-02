import { GrEdit } from "react-icons/gr";
import { RiDeleteBinLine } from "react-icons/ri";
import RentModel from "../../models/rent.model";
import "./rent.css";

interface RentProps {
  rent: RentModel;
}

export const Rent: React.FC<RentProps> = ({ rent }) => {
  const startDate = new Date(rent.startDate).toLocaleDateString();
  const endDate = new Date(rent.endDate).toLocaleDateString();
  return (
    <div className="rent">
      <div>
        <p>{rent.client.firstname}</p>
        <p>{rent.client.lastname}</p>
        <p>{rent.client.phone}</p>
        <p>{rent.client.email}</p>
      </div>
      <div>
        <p>{rent.vehicle.brand}</p>
        <p>{rent.vehicle.model}</p>
        <p>{rent.vehicle.matriculation}</p>
        <p>{rent.vehicle.type}</p>
      </div>
      <div>
        <p>Du {startDate}</p>
        <p>au {endDate}</p>
        <p>{rent.price}€ TTC</p>
      </div>
      <button className="delete_button">
        <RiDeleteBinLine />
      </button>
      <button className="edit_button">
        <GrEdit />
      </button>
    </div>
  );
};
