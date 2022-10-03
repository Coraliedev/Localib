import ClientModel from "../../models/client.model";
import "./client.css";
import { CardInfos } from "../cardinfos/cardinfos.component";
import { DeleteButton } from "../buttons/delete_button/deleteButton.component";
import { UpdateButton } from "../buttons/update_button/updateButton.component";
import { ClientAttributeNames } from "../../enums/clientAttributeNames.enum";
import { AddToLocationButton } from "../buttons/location_button/addToLocation.component";

interface ClientProps {
  client: ClientModel;
  modifyClientValue?: (client: ClientModel) => void;
  modifyAddValue?: (add: boolean) => void;
}

export const Client: React.FC<ClientProps> = ({
  client,
  modifyClientValue,
  modifyAddValue,
}) => {
  let clientInfos = [
    [ClientAttributeNames.Nom, client?.lastname],
    [ClientAttributeNames.Prenom, client?.firstname],
    [ClientAttributeNames.Téléphone, client?.phone],
    [
      ClientAttributeNames.DateDeNaissance,
      new Date(client?.birthdate!).toLocaleDateString(),
    ],
    [ClientAttributeNames.Email, client?.email],
  ];
  return (
    <div className="client">
      <CardInfos entity="client" entityInfos={clientInfos} />
      <DeleteButton client={client} />
      {modifyAddValue && modifyClientValue && <><UpdateButton
        client={client}
        onClick={() => {
          modifyClientValue(client);
          modifyAddValue(false);
        } } /><AddToLocationButton entity={client} entityName="client" /></>}
    </div>
  );
};
