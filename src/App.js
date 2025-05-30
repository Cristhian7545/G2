import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Servicios from './componentes/Servicios';
import ServicioPersona from './componentes/ServicioPersona';
import ServicioEvento from './componentes/ServicioEvento';
import Nosotros from './componentes/Nosotros';
import ListaDoctores from './componentes/ListaDoctores';
import Sucursales from './componentes/Sucursales';
import Register from './componentes/Register';
import Login from './componentes/Login'; // nombre corregido
import Reclamos from './componentes/Reclamos';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/servicio-persona" element={<ServicioPersona />} />
        <Route path="/servicio-evento" element={<ServicioEvento />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/medicos" element={<ListaDoctores />} />
        <Route path="/sucursales" element={<Sucursales />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reclamos" element={<Reclamos />} />


      </Routes>
    </Router>
  );
}

export default App;
