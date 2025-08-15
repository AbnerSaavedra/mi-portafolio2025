import React from 'react';
import '../styles/SobreMi.css'; // Asegúrate de tener este archivo

const SobreMi: React.FC = () => {
  return (
    <div className="sobre-mi-container">
      {/* 🧠 Hero simbólico */}
      <section className="sobre-mi-hero">
        <h2>Transformar la técnica en experiencia humana</h2>
        <p>
          Soy Abner Saavedra, mentor técnico y pedagógico, desarrollador senior y referente en cultura docente venezolana. Mi propósito: convertir cada bloque de código en una lección simbólica.
        </p>
      </section>

      {/* 📜 Trayectoria y valores */}
      <section className="trayectoria-valores">
        <h3>Mi camino</h3>
        <ul>
          <li>🎓 Formación en pedagogía, tecnología y negociación internacional.</li>
          <li>🧩 Experiencia en ReactJS, React Native, NestJS e IA generativa.</li>
          <li>🌱 Filosofía basada en ética, motivación simbólica y adaptabilidad.</li>
        </ul>
      </section>

      {/* 🎨 Identidad profesional */}
      <section className="identidad-profesional">
        <h3>Mi enfoque</h3>
        <p>
          Cada componente visual, cada estilo depurado, cada ficha motivacional que diseño busca inspirar, enseñar y conectar. Mi portafolio no es solo técnico: es una extensión de mi filosofía docente.
        </p>
      </section>

      {/* 📌 Cierre emocional */}
      <section className="cierre-simbolico">
        <blockquote>
          “Educar con tecnología no es solo enseñar a programar, es enseñar a transformar.”
        </blockquote>
      </section>
    </div>
  );
};

export default SobreMi;
