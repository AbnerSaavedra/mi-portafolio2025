// src/components/TechStack.tsx
const stack = ['ReactJS ⚛️', 'React Native 📱', 'NestJS 🛡️', 'IA Generativa 🤖'];

export const TechStack: React.FC = () => (
  <section className="tech">
    <h2>Mi stack tecnológico</h2>
    <ul>
      {stack.map((tech, i) => (
        <li key={i}>{tech}</li>
      ))}
    </ul>
  </section>
);
