// src/routes/AppRoutes.tsx
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from '../pages/Inicio';
import Contacto from '../pages/Contacto';
import Proyectos from '../pages/Proyectos';

export const AppRoutes: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/proyectos" element={<Proyectos />} />
    <Route path="/contacto" element={<Contacto />} />
      {/* Aquí puedes agregar más rutas como /proyectos, /contacto, etc. */}
    </Routes>
  </Router>
  
);
