import "../styles/CardProyecto.css";
import type { Proyecto } from "../types/Proyecto";

interface Props {
  proyecto: Proyecto;
}

const CardProyecto: React.FC<Props> = ({ proyecto }) => (
  <div className="card-proyecto">
    <img src={`/assets/${proyecto.imagen}`} alt={proyecto.titulo} />
    <h3>{proyecto.titulo}</h3>
    <p>{proyecto.descripcion}</p>
    <div className="tecnologias">
      {proyecto.tecnologias.map((tec, index) => (
        <span key={index}>{tec}</span>
      ))}
    </div>
    <a href={proyecto.enlace} target="_blank" rel="noopener noreferrer">
      Ver proyecto
    </a>
    {proyecto.categoria && <p className="categoria">{proyecto.categoria}</p>}
  </div>
);

export default CardProyecto;
