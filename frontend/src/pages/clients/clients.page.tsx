import axios from "axios";
import { useEffect } from "react";
import Header from "../../components/header/header.component";

const ClientsPage: React.FC = () => {
  useEffect(() => {
    axios.get("http://localhost:3001/client").then((response) => {
      console.log(response.data);
    });
  }, []);
  return (
    <div>
      <Header />
      Clients Page
    </div>
  );
};

export default ClientsPage;
