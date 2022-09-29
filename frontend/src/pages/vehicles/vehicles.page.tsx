import { useMutation, useQuery, useQueryClient } from "react-query";
import Header from "../../components/header/header.component";
import { addVehicle, getAllVehicles } from "../../services/vehicles.services";

const VehiclesPage: React.FC = () => {
  const queryClient = useQueryClient();

  // get all vehicles from database
  const { data: vehicles } = useQuery("vehicles", getAllVehicles, {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    staleTime: Infinity,
    cacheTime: Infinity,
  });

  // add vehicle to database
  const { mutate: newVehicle } = useMutation(addVehicle, {
    onSuccess: () => {
      queryClient.invalidateQueries("vehicles");
    },
  });
  return (
    <div>
      <Header />
      <div className="vehicles">
        <div>
          <button className="add_vehicle" onClick={()=> newVehicle() }>Ajouter une voiture</button>
          {vehicles && vehicles.map((vehicle: any) => <p>{vehicle.brand}</p>)}
        </div>
      </div>
    </div>
  );
};

export default VehiclesPage;

