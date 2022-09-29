import { useMutation, useQuery, useQueryClient } from "react-query";
import { VehicleForm } from "../../components/forms/vehicle/vehicleForm.component";
import Header from "../../components/header/header.component";
import { Vehicle } from "../../components/vehicles/vehicle.component";
import { addVehicle, getAllVehicles } from "../../services/vehicles.services";
import "./vehicles.page.css";

const VehiclesPage: React.FC = () => {
  const queryClient = useQueryClient();

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
              <Vehicle key={vehicle._id} vehicle={vehicle} />
            ))}
        </div>
        <VehicleForm className="vehicle_form" />
        <VehicleForm className="vehicle_update_form" />
      </div>
    </div>
  );
};

export default VehiclesPage;
