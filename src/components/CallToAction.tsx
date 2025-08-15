import { Link } from 'react-router-dom';

export const CallToAction: React.FC = () => (
  <section className="cta">
    <Link to="/proyectos">
      <button>Ver proyectos</button>
    </Link>
    <Link to="/contacto">
      <button>Contáctame</button>
    </Link>
  </section>
);
