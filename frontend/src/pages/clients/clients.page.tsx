import { useQuery } from "react-query";
import { getAllClients } from "../../services/client.services";
import ClientModel from "../../models/client.model";
import "./clients.page.css";
import Header from "../../components/header/header.component";
import { Client } from "../../components/client/client.component";
import { ClientForm } from "../../components/forms/client/clientForm.component";
import { useState } from "react";

const ClientsPage: React.FC = () => {
  const [client, setClient] = useState<ClientModel>({
    _id: "",
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    birthdate: new Date(),
  });

  // get all clients from database
  const { data: clients } = useQuery("clients", getAllClients, {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    staleTime: Infinity,
    cacheTime: Infinity,
  });

  // display client form when click on add client button
  const displayClientForm = () => {
    let clientForm = document.getElementsByTagName("form")[0];
    clientForm.style.display = "flex";
  };

  return (
    <div>
      <Header />
      <div className="clients">
        <div>
          <input
            type="button"
            className="add_client"
            value=" Ajouter un client"
            onClick={() => displayClientForm()}
          ></input>
          {clients &&
            clients.map((client: ClientModel) => (
              <Client
                key={client._id}
                client={client}
                modifyIdValue={setClient}
              />
            ))}
        </div>
        <ClientForm className="client_form" />
        <ClientForm className="client_update_form" client={client} />
      </div>
    </div>
  );
};

export default ClientsPage;
