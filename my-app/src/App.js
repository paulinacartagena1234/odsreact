import React, { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Inicio from './components/Inicio';
import Analizar from './components/Analizar';
import Resultados from './components/Resultados';
import logo from './assets/logo.png';

function App() {
  const [results, setResults] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Logo" className="App-logo" />
        <nav>
          <Link to="/" className="nav-link">
            Inicio
          </Link>
          <Link to="/analizar" className="nav-link">
            Analizar
          </Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/analizar" element={<Analizar onResults={setResults} />} />
          <Route path="/resultados" element={<Resultados data={results} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
