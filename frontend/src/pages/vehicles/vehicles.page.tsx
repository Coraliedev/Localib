import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { AddButton } from "../../components/buttons/add_button/addButton.component";
import { Form } from "../../components/form/form.component";
import Header from "../../components/header/header.component";
import { SearchBar } from "../../components/searchBar/searchBar.component";
import { Vehicle } from "../../components/vehicles/vehicle.component";
import { VehicleSearch } from "../../enums/vehicleSearch.enum";
import VehicleModel from "../../models/vehicle.model";
import { getAllVehicles } from "../../services/vehicles.services";
import "./vehicles.page.css";

const VehiclesPage: React.FC = () => {
  const queryClient = useQueryClient();

  const [vehicle, setVehicle] = useState<VehicleModel>({} as VehicleModel);
  const [add, setAdd] = useState<boolean>(false);
  const [search, setSearch] = useState<string | undefined>();
  console.log(search);
  // get all vehicles from database
  const { data: vehicles } = useQuery("vehicles", getAllVehicles, {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    staleTime: Infinity,
    cacheTime: Infinity,
  });

  return (
    <div>
      <Header className="vehicles" />
      <div className="vehicles">
        <div>
          <AddButton
            value="Ajouter un véhicule"
            className="add_vehicle"
            onClick={() => {
              setAdd(true);
              setVehicle({} as VehicleModel);
            }}
          />
          <SearchBar modifySearchValue={setSearch} />
          {vehicles && search?.length! > 0
            ? vehicles
                .filter((key: any) => {
                  return (
                    key[VehicleSearch.brand].toLowerCase().includes(search) ||
                    key[VehicleSearch.model].toLowerCase().includes(search) ||
                    key[VehicleSearch.matriculation].toLowerCase().includes(search) ||
                    key[VehicleSearch.type].toLowerCase().includes(search)
                  );
                })
                .map((vehicle: any) => (
                  <Vehicle
                    key={vehicle._id}
                    vehicle={vehicle}
                    modifyVehicleValue={setVehicle}
                    modifyAddValue={setAdd}
                  />
                ))
            : vehicles?.map((vehicle: any) => (
                <Vehicle
                  key={vehicle._id}
                  vehicle={vehicle}
                  modifyVehicleValue={setVehicle}
                  modifyAddValue={setAdd}
                />
              ))}
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
