import { useMutation, useQueryClient } from "react-query";
import ClientModel from "../../../models/client.model";
import { addClient, updateClientById } from "../../../services/client.services";
import "./clientForm.css";

interface ClientFormProps {
  client?: ClientModel;
  className?: string;
}

export const ClientForm: React.FC<ClientFormProps> = ({
  className,
  client,
}) => {
  const queryClient = useQueryClient();

  const { mutate: newClient } = useMutation(addClient, {
    onSuccess: () => {
      queryClient.invalidateQueries("clients");
    },
  });
  const { mutate: updateClient } = useMutation(updateClientById, {
    onSuccess: () => {
      queryClient.invalidateQueries("clients");
    },
  });

  // event type submit with add client or update client
  const submitClient = (e: any) => {
    e.preventDefault();
    let thisClient = {
      firstname: e.target[0].value,
      lastname: e.target[1].value,
      email: e.target[2].value,
      phone: e.target[3].value,
      birthdate: e.target[4].value,
    }
    if (className === "client_form") { 
      /* A mutation function that is called when the form is submitted for create a new client */
      newClient(thisClient);
    }
    if (className === "client_update_form" && client) {
      let clientUpdate = [client._id, thisClient];
      updateClient(clientUpdate);
    }
    /* Resetting the form. */
    e.target.reset();
    // hide form
    e.target.style.display = "none";
  };

  return (
    <form name={className} className={className} onSubmit={submitClient}>
      <h2 className="title_client_update_form">Modifier client</h2>
      <h2 className="title_client_form">Nouveau client</h2>
      <div className="firstname">
        <label htmlFor="firstname">Prénom:</label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          defaultValue={client?.firstname}
          required
        />
      </div>
      <div className="lastname">
        <label htmlFor="lastname">Nom:</label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          defaultValue={client?.lastname}
          required
        />
      </div>
      <div className="email">
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          name="email"
          id="email"
          defaultValue={client?.email}
          required
        />
      </div>
      <div className="phone">
        <label htmlFor="phone">Téléphone:</label>
        <input
          type="text"
          name="phone"
          id="phone"
          defaultValue={client?.phone}
          required
        />
      </div>
      <div className="birthdate">
        <label htmlFor="birthdate">Date de naissance:</label>
        <input
          type="date"
          name="birthdate"
          id="birthdate"
          required
        />
      </div>
      <button type="submit" id="submit">
        Valider
      </button>
    </form>
  );
};
