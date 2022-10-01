import { Navbar } from "../navbar/navbar.component";
import "./header.css";

const logoLocalib = require("../../assets/localib.png");

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({className}) => {
  return (
    <div className="header">
      <img src={logoLocalib} alt="logo Localib" className="logo" />
      <Navbar className={className} />
    </div>
  );
};

export default Header;
