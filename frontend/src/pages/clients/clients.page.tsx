import { useQuery } from "react-query";
import { getAllClients } from "../../services/client.services";
import ClientModel from "../../models/client.model";
import "./clients.page.css";
import Header from "../../components/header/header.component";
import { Client } from "../../components/client/client.component";
import { useState } from "react";
import { AddButton } from "../../components/buttons/add_button/addButton.component";
import { Form } from "../../components/form/form.component";

const ClientsPage: React.FC = () => {
  const [client, setClient] = useState<ClientModel>({} as ClientModel);
  const [add, setAdd] = useState<boolean>(false);

  // get all clients from database
  const { data: clients } = useQuery("clients", getAllClients, {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    staleTime: Infinity,
    cacheTime: Infinity,
  });

  return (
    <div>
      <Header className="clients" />
      <div className="clients">
        <div>
          <AddButton
            value="Ajouter un client"
            className="add_client"
            onClick={() => {
              setAdd(true);
              setClient({} as ClientModel);
            }}
          />
          {clients &&
            clients.map((client: ClientModel) => (
              <Client
                key={client._id}
                client={client}
                modifyClientValue={setClient}
                modifyAddValue={setAdd}
              />
            ))}
        </div>
        {add === true && <Form className="client_form" formName="Nouveau client" client={ {} as ClientModel}  />}
        {"_id" in client && (
          <Form className="client_update_form" client={client} formName="Modifier client" />
        )}
      </div>
    </div>
  );
};

export default ClientsPage;
