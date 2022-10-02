import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { AddButton } from "../../components/buttons/add_button/addButton.component";
import { FilterBar } from "../../components/filterBar/filterBar.component";
import { Form } from "../../components/form/form.component";
import Header from "../../components/header/header.component";
import { SearchBar } from "../../components/searchBar/searchBar.component";
import { Vehicle } from "../../components/vehicles/vehicle.component";
import { VehicleSearch } from "../../enums/vehicleSearch.enum";
import VehicleModel from "../../models/vehicle.model";
import { getAllVehicles } from "../../services/vehicles.services";
import "./vehicles.page.css";

const VehiclesPage: React.FC = () => {
  const [vehicle, setVehicle] = useState<VehicleModel>({} as VehicleModel);
  const [add, setAdd] = useState<boolean>(false);
  const [search, setSearch] = useState<string>();
  const [dates, setDates] = useState<any[]>([]);

  // get all vehicles from database
  const { data: vehicles } = useQuery("vehicles", getAllVehicles, {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    staleTime: Infinity,
    cacheTime: Infinity,
  });

  // filter vehicles by dates
  function filterByDates(): any {
    return vehicles
      ?.filter((vehicle: VehicleModel) => {
        if (vehicle.unavailableDates && vehicle.unavailableDates.length > 0) {
          for (let i = 0; i < vehicle.unavailableDates.length; i++) {
            let unavailableDateStart = new Date(
              vehicle.unavailableDates[i][0]
            ).getTime();
            let unavailableDateEnd = new Date(
              vehicle.unavailableDates[i][1]
            ).getTime();
            if (
              dates[0] >= unavailableDateStart &&
              dates[0] <= unavailableDateEnd
            ) {
              return false;
            }
            if (
              dates[1] >= unavailableDateStart &&
              dates[1] <= unavailableDateEnd
            ) {
              return false;
            } else {
              return true;
            }
          }
        }
        if (vehicle.unavailableDates && vehicle.unavailableDates.length === 0) {
          console.log("no date");
          return vehicle;
        }
      })
      .map((vehicle: any) => (
        <Vehicle
          key={vehicle._id}
          vehicle={vehicle}
          modifyVehicleValue={setVehicle}
          modifyAddValue={setAdd}
          available={true}
        />
      ));
  }

  // filter vehicles by search
  function filterSearch() {
    return vehicles
      .filter((key: any) => {
        return Object.values(VehicleSearch).some((value) => {
          return key[value].toLowerCase().includes(search);
        });
      })
      .map((vehicle: VehicleModel) => (
        <Vehicle
          key={vehicle._id}
          vehicle={vehicle}
          modifyVehicleValue={setVehicle}
          modifyAddValue={setAdd}
        />
      ));
  }
  console.log(dates);

  return (
    <div>
      <Header className="vehicles" />
      <div className="vehicles">
        <div>
          <div className="vehicle_toolbar">
            <AddButton
              value="Ajouter un véhicule"
              className="add_vehicle"
              onClick={() => {
                setAdd(true);
                setVehicle({} as VehicleModel);
              }}
            />
            <FilterBar modifyDates={setDates} />
            <SearchBar modifySearchValue={setSearch} />
          </div>
          {vehicles &&
            (dates.length > 0
              ? filterByDates() // filter by dates
              : vehicles && search
              ? filterSearch() // filter by search
              : vehicles.map((vehicle: VehicleModel) => (
                  <Vehicle
                    key={vehicle._id}
                    vehicle={vehicle}
                    modifyVehicleValue={setVehicle}
                    modifyAddValue={setAdd}
                  />
                )))}
        </div>
        {add === true && (
          <Form
            className="vehicle_form"
            formName="Nouveau véhicule"
            vehicle={{} as VehicleModel}
          />
        )}
        {"_id" in vehicle && (
          <Form
            className="vehicle_update_form"
            vehicle={vehicle}
            formName="Modifier véhicule"
          />
        )}
      </div>
    </div>
  );
};

export default VehiclesPage;
