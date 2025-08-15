// src/routes/AppRoutes.tsx
import {Routes, Route } from 'react-router-dom';
import Inicio from '../pages/Inicio';
import Contacto from '../pages/Contacto';
import Proyectos from '../pages/Proyectos';
import SobreMi from '../pages/SobreMi';
import IA from '../pages/IA';

export const AppRoutes: React.FC = () => (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/proyectos" element={<Proyectos />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/sobre-mi" element={<SobreMi />} />
      <Route path="/ia" element={<IA />} />
      {/* Aquí puedes agregar más rutas como /proyectos, /contacto, etc. */}
    </Routes>
  
);
