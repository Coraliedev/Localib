import { addRent } from "../../../services/rents.services";
import { InputDate } from "../inputs/inputDate.component";
import { InputText } from "../inputs/inputText.component";
import "../form.css";
import axios from "axios";

export const FormRent: React.FC = () => {
  function createRent(e: any) {
    console.log(e.target[0].value);
    e.stopPropagation();
    e.preventDefault();

    axios
      .get(
        "http://localhost:3001/vehicle/" + sessionStorage.getItem("vehicle")!
      )
      .then((res) => {
        console.log(res.data.locationPrice);
        // calcul prix a partir de la date de debut et de fin et du prix par jour du vehicule
        let startdate = new Date(e.target[2].value).getTime();
        let enddate = new Date(e.target[3].value).getTime();

        let price = Math.round(
          res.data.locationPrice * ((enddate - startdate) / 86400000 + 1)
        );
        console.log(enddate);
        let rent = {
          startDate: e.target[2].value,
          endDate: e.target[3].value,
          vehicle: sessionStorage.getItem("vehicle")!,
          client: sessionStorage.getItem("client")!,
          price: price,
        };
        console.log(rent);
        addRent(rent);
      });
  }
  return (
    <form onSubmit={createRent} className="form_rent">
      <h2>Créer Location</h2>
      <InputText value="Véhicule" block={true} storage="vehicle" />
      <InputText value="Client" block={true} storage="client" />
      <InputDate value="Date de début" />
      <InputDate value="Date de fin" />
      <button type="submit" id="submit">
        Valider
      </button>
    </form>
  );
};
