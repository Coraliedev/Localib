import ClientModel from "../../models/client.model";
import VehicleModel from "../../models/vehicle.model";

import "./cardinfos.css";

interface CardsInfosProps {
  client?: ClientModel;
  vehicle?: VehicleModel;
}
export const CardInfos: React.FC<CardsInfosProps> = ({ client, vehicle }) => {

  let clientInfos = [
    ["Nom", client?.lastname],
    ["Prénom", client?.firstname],
    ["Téléphone", client?.phone],
    ["Date de naissance", new Date(client?.birthdate!).toLocaleDateString()],
    ["E-mail", client?.email],
  ];

  let vehicleInfos = [
    ["Marque", vehicle?.brand],
    ["Modèle", vehicle?.model],
    ["Immatriculation", vehicle?.matriculation],
    ["Etat", vehicle?.state],
    ["Prix à la journée", vehicle?.locationPrice],
    ["Type", vehicle?.type],
  ];

  return (
    <div className="cardinfos">
      {client && (
        <div className="client">
          <div>
            {clientInfos.map((info) => (
              <p>
                <>
                  <span>{info[0]}</span>
                </>
                : <>{info[1]}</>
              </p>
            ))}
          </div>
        </div>
      )}
      {vehicle && (
        <div className="vehicle">
          <div>
            {vehicleInfos.map((info) => (
              <p>
                <>
                  <span>{info[0]}</span>
                </>
                : <>{info[1]}</>
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
