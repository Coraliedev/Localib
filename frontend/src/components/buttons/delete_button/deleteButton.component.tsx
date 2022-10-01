import { RiDeleteBinLine } from "react-icons/ri";
import { useMutation, useQueryClient } from "react-query";
import ClientModel from "../../../models/client.model";
import VehicleModel from "../../../models/vehicle.model";
import { deleteClient } from "../../../services/client.services";
import { deleteVehicle } from "../../../services/vehicles.services";

interface DeleteButtonProps {
  client?: ClientModel;
  vehicle?: VehicleModel;
}

export const DeleteButton: React.FC<DeleteButtonProps> = ({
  client,
  vehicle,
}) => {
  const queryClient = useQueryClient();

  /* A hook that allows to make a mutation request for delete a client */
  const { mutate: handleDeleteClient } = useMutation(deleteClient, {
    onSuccess: () => {
      queryClient.invalidateQueries("clients");
    },
  });

  // delete vehicle from database
  const { mutate: handleDeleteVehicle } = useMutation(deleteVehicle, {
    onSuccess: () => {
      queryClient.setQueriesData("vehicles", (oldData: any) => {
        return oldData.filter((v: VehicleModel) => v._id !== vehicle!._id);
      });
    },
  });

  return (
    <>
      {client && (
        <button
          className="delete_button"
          onClick={() => handleDeleteClient(client._id)}
        >
          <RiDeleteBinLine />
        </button>
      )}
      {vehicle && (
        <button
          className="delete_button"
          onClick={() => handleDeleteVehicle(vehicle._id)}
        >
          <RiDeleteBinLine />
        </button>
      )}
    </>
  );
};
