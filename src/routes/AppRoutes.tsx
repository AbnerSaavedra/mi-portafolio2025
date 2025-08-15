// src/routes/AppRoutes.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from '../pages/Inicio';

export const AppRoutes: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Inicio />} />
      {/* Aquí puedes agregar más rutas como /proyectos, /contacto, etc. */}
    </Routes>
  </Router>
);
