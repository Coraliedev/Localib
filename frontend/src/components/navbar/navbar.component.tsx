import "./navbar.css";

export const Navbar: React.FC = () => {
  return (
    <nav className="nav">
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
