import { Navbar } from "../navbar/navbar.component";
import "./header.css";

const logoLocalib = require("../../assets/localib.png");

const Header: React.FC = () => {
  return (
    <div className="header">
      <img src={logoLocalib} alt="logo Localib" className="logo" />
      <Navbar />
    </div>
  );
};

export default Header;
