import { VehicleAttributeNames } from "../../enums/vehicleAttributeNames.enum";
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
  let vehicleInfos = [
    [VehicleAttributeNames.Marque, vehicle?.brand],
    [VehicleAttributeNames.Modèle, vehicle?.model],
    [VehicleAttributeNames.Immatriculation, vehicle?.matriculation],
    [VehicleAttributeNames.Etat, vehicle?.state],
    [VehicleAttributeNames.PrixDeLocation, vehicle?.locationPrice],
    [VehicleAttributeNames.Type, vehicle?.type],
  ];

  return (
    <div className="vehicle">
      <div>
        <CardInfos
          key={vehicle._id}
          entity="vehicle"
          entityInfos={vehicleInfos}
        />
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
