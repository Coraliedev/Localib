import { useMutation, useQueryClient } from "react-query";
import { ClientInputDate } from "../../enums/clientInputDate.enum";
import { ClientInputText } from "../../enums/clientInputText.enum";
import { VehicleInputNumber } from "../../enums/vehicleInputNumber.enum";
import { VehicleInputText } from "../../enums/vehicleInputText.enum";
import { VehicleSelect } from "../../enums/vehicleSelect.enum";
import ClientModel from "../../models/client.model";
import VehicleModel from "../../models/vehicle.model";
import { addClient, updateClientById } from "../../services/client.services";
import {
  addVehicle,
  updateVehicleById,
} from "../../services/vehicles.services";
import { InputDate } from "./inputs/inputDate.component";
import { InputNumber } from "./inputs/inputNumber.component";
import { InputText } from "./inputs/inputText.component";
import { Select } from "./inputs/select.component";
import "./form.css";
import { ClientInputEmail } from "../../enums/clientInputEmail";
import { InputEmail } from "./inputs/inputEmail.component";

interface FormProps {
  className?: string;
  client?: ClientModel;
  vehicle?: VehicleModel;
  formName?: string;
}

export const Form: React.FC<FormProps> = ({
  className,
  client,
  vehicle,
  formName,
}) => {
  const queryClient = useQueryClient();

  // add client to database
  const { mutate: newClient } = useMutation(addClient);
  // update client in database
  const { mutate: updateClient } = useMutation(updateClientById);

  // add vehicle to database
  const { mutate: newVehicle } = useMutation(addVehicle);
  // update vehicle in database
  const { mutate: updateVehicle } = useMutation(updateVehicleById);

  const submitForm = (e: any) => {
    e.preventDefault();
    if (client) {
      let thisClient = {
        lastname: e.target[0].value,
        firstname: e.target[1].value,
        email: e.target[3].value,
        phone: e.target[2].value,
        birthdate: e.target[4].value,
      };
      if (className === "client_form") {
        newClient(thisClient, {
          onSuccess: () => {
            queryClient.setQueriesData("clients", (oldData: any) => {
              return [...oldData, thisClient];
            });
          },
        });
      }
      if (className === "client_update_form" && client) {
        let clientUpdate = [client._id!, thisClient];
        updateClient(clientUpdate, {
          onSuccess: () => {
            queryClient.setQueriesData("clients", (oldData: any) => {
              return oldData.map((c: ClientModel) =>
                c._id === client._id ? thisClient : c
              );
            });
          },
        });
      }
    }
    if (vehicle) {
      let thisVehicle = {
        brand: e.target[0].value,
        model: e.target[1].value,
        matriculation: e.target[2].value,
        state: e.target[5].value,
        locationPrice: e.target[3].value,
        type: e.target[4].value,
      };
      if (className === "vehicle_form") {
        newVehicle(thisVehicle, {
          onSuccess: () => {
            queryClient.setQueriesData("vehicles", (oldData: any) => {
              return [...oldData, thisVehicle];
            });
          },
        });
      }
      if (className === "vehicle_update_form" && vehicle) {
        const VehicleUpdate = [vehicle._id, thisVehicle];
        updateVehicle(VehicleUpdate, {
          onSuccess: () => {
            queryClient.setQueriesData("vehicles", (oldData: any) => {
              return oldData.map((v: VehicleModel) =>
                v._id === vehicle._id ? thisVehicle : v
              );
            });
          },
        });
      }
    }
    /* Resetting the form. */
    e.target.reset();
    e.target.style.display = "none";
  };

  return (
    <form name={className} className={className} onSubmit={submitForm}>
      <h2>{formName}</h2>
      {client &&
        Object.values(ClientInputText).map((inputText, index) => (
          <InputText key={index} value={inputText} />
        ))}
      {client &&
        Object.values(ClientInputEmail).map((inputEmail, index) => (
          <InputEmail key={index} value={inputEmail} />
        ))}
      {client &&
        Object.values(ClientInputDate).map((inputDate, index) => (
          <InputDate key={index} value={inputDate} />
        ))}
      {vehicle &&
        Object.values(VehicleInputText).map((inputText, index) => (
          <InputText key={index} value={inputText} />
        ))}
      {vehicle &&
        Object.values(VehicleInputNumber).map((inputDate, index) => (
          <InputNumber key={index} value={inputDate} />
        ))}
      {vehicle &&
        Object.values(VehicleSelect).map((select, index) => (
          <Select key={index} value={select} />
        ))}

      <button type="submit" id="submit">
        Valider
      </button>
    </form>
  );
};
