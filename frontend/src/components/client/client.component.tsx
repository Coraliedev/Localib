import ClientModel from "../../models/client.model";
import "./client.css";
import { CardInfos } from "../cardinfos/cardinfos.component";
import { DeleteButton } from "../buttons/delete_button/deleteButton.component";
import { UpdateButton } from "../buttons/update_button/updateButton.component";

interface ClientProps {
  client: ClientModel;
  modifyClientValue: (client: ClientModel) => void;
  modifyAddValue: (add: boolean) => void;
}

export const Client: React.FC<ClientProps> = ({
  client,
  modifyClientValue,
  modifyAddValue,
}) => {
  return (
    <div>
      <CardInfos client={client} />
      <DeleteButton client={client} />
      <UpdateButton
        client={client}
        onClick={() => {
          modifyClientValue(client);
          modifyAddValue(false);
        }}
      />
    </div>
  );
};
