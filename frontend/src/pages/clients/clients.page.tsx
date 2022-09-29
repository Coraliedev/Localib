import Header from "../../components/header/header.component";
import { useQuery } from "react-query";
import { getAllClients } from "../../services/client.services";
import { Client } from "../../components/client/client.component";
import ClientModel from "../../models/client.model";
import "./clients.css";
import { ClientForm } from "../../components/forms/client/clientForm.component";

const ClientsPage: React.FC = () => {
  const { data } = useQuery("clients", getAllClients, {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    staleTime: Infinity,
    cacheTime: Infinity,
  });

  const displayClientForm = () => {
    let clientForm = document.getElementsByTagName("form")[0];
    clientForm.style.display = "flex";
  };

  return (
    <div>
      <Header />
      <div className="clients">
        <div>
          <button className="add_client" onClick={() => displayClientForm()}>
            Ajouter un client
          </button>
          {data &&
            data.map((client: ClientModel) => (
              <Client key={client._id} client={client} />
            ))}
        </div>
        <ClientForm className="client_form" />
        <ClientForm className="client_update_form" />
      </div>
    </div>
  );
};

export default ClientsPage;
