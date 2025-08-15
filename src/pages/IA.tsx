import React from 'react';
import '../styles/IA.css';

const IA: React.FC = () => {
  return (
    <div className="ia-container">
      {/* 🧠 Apertura */}
      <section className="ia-hero">
        <h2>IA como aliada pedagógica</h2>
        <p>
          No uso IA para reemplazar el pensamiento humano, sino para potenciarlo. Cada interacción con IA es una oportunidad para enseñar, aprender y transformar.
        </p>
      </section>

      {/* 🧪 Ejemplos */}
      <section className="ia-ejemplos">
        <h3>Aplicaciones reales</h3>
        <ul>
          <li>🧠 Co-creación de fichas visuales y glosarios adaptables.</li>
          <li>🎯 Generación de objetivos simbólicos para jornadas educativas.</li>
          <li>🛠️ Depuración colaborativa de estilos y componentes React.</li>
          <li>📚 Diseño de actividades participativas con narrativa emocional.</li>
        </ul>
      </section>

      {/* 📘 Glosario */}
      <section className="ia-glosario">
        <h3>Glosario simbólico</h3>
        <dl>
          <dt>Prompt pedagógico</dt>
          <dd>Instrucción diseñada para generar contenido educativo con intención formativa.</dd>

          <dt>Ficha visual</dt>
          <dd>Recurso gráfico que sintetiza conceptos técnicos con narrativa emocional.</dd>

          <dt>IA colaborativa</dt>
          <dd>Modelo de interacción donde la IA actúa como mentor, editor y compañero creativo.</dd>
        </dl>
      </section>

      {/* 🔗 Cierre */}
      <section className="ia-cierre">
        <blockquote>
          “La IA no reemplaza al docente, lo acompaña en su misión de formar con propósito.”
        </blockquote>
        <p>¿Quieres ver cómo aplico esto en mis proyectos? Visita la sección <a href="/proyectos">Proyectos</a>.</p>
      </section>
    </div>
  );
};

export default IA;
