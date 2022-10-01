import "./navbar.css";

interface NavbarProps {
  className?: string;
}
export const Navbar: React.FC<NavbarProps>= ({className}) => {
  return (
    <nav className="nav" id={className+"_nav"}>
      <a href="/vehicles">
        <span>Véhicules</span>
      </a>
      <a href="/clients">
        <span>Clients</span>
      </a>
      <a href="/rents">
        <span>Locations</span>
      </a>
      <a href="/createrent">
        <span>Créer location</span>
      </a>
    </nav>
  );
};
