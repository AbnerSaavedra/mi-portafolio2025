// src/components/Navbar.tsx
import { Link } from 'react-router-dom';
import './Navbar.css'; // o usa módulos si prefieres

export const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Abner Saavedra</h1>
      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/sobre-mi">Sobre mí</Link></li>
        <li><Link to="/proyectos">Proyectos</Link></li>
        <li><Link to="/ia">IA</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  );
};
