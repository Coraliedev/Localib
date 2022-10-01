import VehicleModel from "../../models/vehicle.model";
import { DeleteButton } from "../buttons/delete_button/deleteButton.component";
import { UpdateButton } from "../buttons/update_button/updateButton.component";
import { CardInfos } from "../cardinfos/cardinfos.component";
import "./vehicle.css";

interface Vehicleprops {
  vehicle: VehicleModel;
  modifyVehicleValue: (vehicle: VehicleModel) => void;
  modifyAddValue: (add: boolean) => void;
}

export const Vehicle: React.FC<Vehicleprops> = ({
  vehicle,
  modifyVehicleValue,
  modifyAddValue,
}) => {
  return (
    <div>
      <div>
        <CardInfos key={vehicle._id} vehicle={vehicle} />
      </div>
      <DeleteButton vehicle={vehicle} />
      <UpdateButton
        vehicle={vehicle}
        onClick={() => {
          modifyVehicleValue(vehicle);
          modifyAddValue(false);
        }}
      />
    </div>
  );
};
