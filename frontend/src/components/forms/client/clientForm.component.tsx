import { useMutation, useQueryClient } from "react-query";
import ClientModel from "../../../models/client.model";
import { addClient } from "../../../services/client.services";
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

  // event type submit with add client or update client
  const submitClient = (e: any) => {
    if (className === "client_form") {
      e.preventDefault();
      /* A mutation function that is called when the form is submitted for create a new client */
      newClient({
        firstname: e.target[0].value,
        lastname: e.target[1].value,
        email: e.target[2].value,
        phone: e.target[3].value,
        birthdate: e.target[4].value,
      });
      e.target.reset();
      console.log("client added");
    }
    if (className === "client_update_form") {
      console.log("update client");
    }
    e.target.style.display = "none";
  };

  return (
    <form name={className} className={className} onSubmit={submitClient}>
      <h2>Nouveau client</h2>
      <div className="firstname">
        <label htmlFor="firstname">Prénom:</label>
        <input type="text" name="firstname" id="firstname" />
      </div>
      <div className="lastname">
        <label htmlFor="lastname">Nom:</label>
        <input type="text" name="lastname" id="lastname" />
      </div>
      <div className="email">
        <label htmlFor="email">E-mail:</label>
        <input type="email" name="email" id="email" />
      </div>
      <div className="phone">
        <label htmlFor="phone">Téléphone:</label>
        <input type="text" name="phone" id="phone" />
      </div>
      <div className="birthdate">
        <label htmlFor="birthdate">Date de naissance:</label>
        <input type="date" name="birthdate" id="birthdate" />
      </div>
      <button type="submit" id="submit">
        Valider
      </button>
    </form>
  );
};
