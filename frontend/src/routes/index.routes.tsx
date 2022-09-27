import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ClientsPage from "../pages/clients/clients.page";
import CreateRentPage from "../pages/createRent/createRent.page";
import HomePage from "../pages/home/home.page";
import RentsPage from "../pages/rents/rents.page";
import VehiclesPage from "../pages/vehicles/vehicles.page";

const index = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/vehicles" element={<VehiclesPage />} />
          <Route path="/rents" element={<RentsPage />} />
          <Route path="/createrent" element={<CreateRentPage />} />
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default index;
