import { useState } from "react";
import { useQuery } from "react-query";
import { VehicleForm } from "../../components/forms/vehicle/vehicleForm.component";
import Header from "../../components/header/header.component";
import { Vehicle } from "../../components/vehicles/vehicle.component";
import VehicleModel from "../../models/vehicle.model";
import { getAllVehicles } from "../../services/vehicles.services";
import "./vehicles.page.css";

const VehiclesPage: React.FC = () => {
  const [vehicle, setVehicle] = useState<VehicleModel>({} as VehicleModel);

  // get all vehicles from database
  const { data: vehicles } = useQuery("vehicles", getAllVehicles, {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    staleTime: Infinity,
    cacheTime: Infinity,
  });

  // display vehicle form when click on add vehicle button
  const displayVehicleForm = () => {
    let vehicleForm = document.getElementsByTagName("form")[0];
    vehicleForm.style.display = "flex";
  };

  return (
    <div>
      <Header />
      <div className="vehicles">
        <div>
          <input
            type="button"
            className="add_vehicle"
            value="Ajouter une voiture"
            onClick={() => displayVehicleForm()}
          ></input>
          {vehicles &&
            vehicles.map((vehicle: any) => (
              <Vehicle
                key={vehicle._id}
                vehicle={vehicle}
                modifyVehicleValue={setVehicle}
              />
            ))}
        </div>
        <VehicleForm className="vehicle_form" />
        <VehicleForm className="vehicle_update_form" vehicle={vehicle} />
      </div>
    </div>
  );
};

export default VehiclesPage;
