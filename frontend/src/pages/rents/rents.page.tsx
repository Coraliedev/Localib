import { useQuery } from "react-query";
import Header from "../../components/header/header.component";
import { Rent } from "../../components/rent/rent.component";
import RentModel from "../../models/rent.model";
import { getAllRents } from "../../services/rents.services";
import "./rents.page.css";

const RentsPage: React.FC = () => {
  const { data: rents } = useQuery("clients", getAllRents, {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    staleTime: Infinity,
    cacheTime: Infinity,
  });


  return (
    <div>
      <Header className="rents" />
      <div className="rents">
        {rents && rents.map((rent: RentModel) => <Rent rent={rent} />)}
        </div>
    </div>
  );
};

export default RentsPage;
