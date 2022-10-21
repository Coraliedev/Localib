import { Link } from "react-router-dom";
import "./navbar.css";

interface NavbarProps {
  className?: string;
}
export const Navbar: React.FC<NavbarProps>= ({className}) => {
  return (
    <nav className="nav" id={className+"_nav"}>
      <Link to="/vehicles">
        <span>Véhicules</span>
      </Link>
      <Link to="/clients">
        <span>Clients</span>
      </Link>
      <Link to="/rents">
        <span>Locations</span>
      </Link>
      <Link to="/createrent">
        <span>Créer location</span>
      </Link>
    </nav>
  );
};
