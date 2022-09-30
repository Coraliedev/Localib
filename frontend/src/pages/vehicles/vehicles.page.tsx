import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { VehicleForm } from "../../components/forms/vehicle/vehicleForm.component";
import Header from "../../components/header/header.component";
import { Vehicle } from "../../components/vehicles/vehicle.component";
import VehicleModel from "../../models/vehicle.model";
import { getAllVehicles } from "../../services/vehicles.services";
import "./vehicles.page.css";

const VehiclesPage: React.FC = () => {
  const queryClient = useQueryClient();
  const [vehicle, setVehicle] = useState<VehicleModel>({} as VehicleModel);

  // get all vehicles from database
  const { data: vehicles } = useQuery("vehicles", getAllVehicles, {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    staleTime: Infinity,
    cacheTime: Infinity,
  });

  // filter vehicles by type
  const filterVehiclesByMoto = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    const filterByMoto = vehicles.filter(
      (vehicle: VehicleModel) => vehicle.type === "Moto"
    );
    console.log(filterByMoto);
    queryClient.setQueriesData("vehicles", filterByMoto);
  };

  // filter vehicles by date disponibility
  const filterVehiclesByDate = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    const filterByDate = vehicles.filter((vehicle: VehicleModel) => {
      let thisdate = new Date();
      if (vehicle.unavailableDates && vehicle.unavailableDates.length > 0) {
        console.log("vehicle.unavailableDates", vehicle.unavailableDates);
        for (let i = 0; i < vehicle.unavailableDates.length; i++) {
          let startDate = new Date(vehicle.unavailableDates[i][0]);
          let endDate = new Date(vehicle.unavailableDates[i][1]);
          if (thisdate <= startDate && thisdate >= endDate) {
            return vehicle;
          }
        }
      }
      if (vehicle.unavailableDates && vehicle.unavailableDates.length === 0) {
        console.log("no date");
        return vehicle;
      }
    });
    queryClient.setQueryData("vehicles", filterByDate);
  };

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
          <input
            type="button"
            onClick={(e) => filterVehiclesByMoto(e)}
            value="Filtrer moto"
          ></input>
          <input
            type="button"
            onClick={(e) => filterVehiclesByDate(e)}
            value="Filtrer date"
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
