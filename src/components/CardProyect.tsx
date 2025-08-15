import type { Proyecto } from '../types/Proyecto'

interface Props {
  proyecto: Proyecto
}

const CardProyecto: React.FC<Props> = ({ proyecto }) => (
  <div className="card">
    <img src={proyecto.imagen} alt={proyecto.titulo} />
    <h3>{proyecto.titulo}</h3>
    <p>{proyecto.descripcion}</p>
    <a href={proyecto.enlace} target="_blank">Ver proyecto</a>
  </div>
)

export default CardProyecto
