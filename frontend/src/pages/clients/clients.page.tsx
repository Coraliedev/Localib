import Header from "../../components/header/header.component";
import { useQueryClient, useMutation, useQuery } from "react-query";
import { addClient, getAllClients } from "../../services/client.services";
import { Client } from "../../components/client/client.component";
import ClientModel from "../../models/client.model";
import "./clients.css";

const ClientsPage: React.FC = () => {
  const queryClient = useQueryClient();

  const { data } = useQuery("clients", getAllClients);

  const { mutate: handleAddClient } = useMutation(addClient, {
    onSuccess: () => {
      queryClient.invalidateQueries("clients");
    },
  });

  return (
    <div>
      <Header />
      <div className="clients">
        <button className="add_client" onClick={() => handleAddClient()}>
          Ajouter un client
        </button>
        {data &&
          data.map((client: ClientModel) => (
            <Client key={client._id} client={client} />
          ))}
      </div>
    </div>
  );
};

export default ClientsPage;
