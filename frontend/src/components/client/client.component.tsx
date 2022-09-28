import { useMutation, useQueryClient } from "react-query";
import ClientModel from "../../models/client.model";
import { deleteClient } from "../../services/client.services";
import "./client.css";
import { RiDeleteBinLine } from "react-icons/ri";
import { GrEdit } from "react-icons/gr";

interface ClientProps {
  client: ClientModel;
}

export const Client: React.FC<ClientProps> = ({ client }) => {
  let birthdate = new Date(client.birthdate).toLocaleDateString();
  const queryClient = useQueryClient();

  const { mutate: handleDeleteClient } = useMutation(deleteClient, {
    onSuccess: () => {
      queryClient.invalidateQueries("clients");
    },
  });
  return (
    <div className="client">
      <p>
        <span>Nom</span> : {client.lastname}
      </p>
      <p>
        <span>Prénom</span> : {client.firstname}
      </p>
      <p>
        <span>Téléphone</span> : {client.phone}
      </p>
      <p>
        <span>Date de naissance</span> : {birthdate}
      </p>
      <button
        className="delete_button"
        onClick={() => handleDeleteClient(client._id)}
      >
        <RiDeleteBinLine />
      </button>
      <button className="edit_button">
        <GrEdit />
      </button>
    </div>
  );
};
