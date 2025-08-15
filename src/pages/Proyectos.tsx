import "../styles/Proyectos.css";
import { proyectos } from "../data/Proyectos";
import CardProyecto from "../components/CardProyecto";

const Proyectos: React.FC = () => {
  return (
    <section className="proyectos">
      <h2>Mis Proyectos</h2>
      <div className="grid-proyectos">
        {proyectos.map((proyecto) => (
          <CardProyecto key={proyecto.id} proyecto={proyecto} />
        ))}
      </div>
    </section>
  );
};

export default Proyectos;
