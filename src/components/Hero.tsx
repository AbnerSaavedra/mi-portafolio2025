import '../styles/HeroSection.css'
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const HeroSection: React.FC = () => {
  let navigate: ReturnType<typeof useNavigate> | null = null;

  try {
    navigate = useNavigate();
  } catch (error) {
    console.warn('Router context not found. Navigation disabled.');
  }

  const handleClick = () => {
    if (navigate) {
      navigate('/proyectos');
    } else {
      alert('Navegación no disponible fuera del contexto del router.');
    }
  };

  return (
    <section>
      <h1>Bienvenido a mi portafolio</h1>
      <button onClick={handleClick}>Ver proyectos</button>
    </section>
  );
};
