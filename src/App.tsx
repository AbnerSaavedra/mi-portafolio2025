// src/App.tsx
import React from 'react';
import { AppRoutes } from './routes/AppRoutes';
import { Navbar } from './components/Navbar';

const App: React.FC = () => {
  return (
    <div className="app-container">
        <header>
          <Navbar />
        </header>
        <main>
          <AppRoutes />
        </main>
    </div>
  );
};

export default App;
