import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DoctorCard from './DoctorCard';

const ListaDoctores = () => {
  const [filtroNombre, setFiltroNombre] = useState('');
  const [filtroEspecialidad, setFiltroEspecialidad] = useState('');
  const [filtroSede, setFiltroSede] = useState('');
  const [filtroTurno, setFiltroTurno] = useState('');
  const doctores = [
    {
      nombre: 'Dr. Juan Pérez',
      especialidad: 'Cardiólogo',
      telefono: '987654321',
      foto: 'https://static.vecteezy.com/system/resources/previews/026/376/483/non_2x/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg'
    },
    {
      nombre: 'Dra. María López',
      especialidad: 'Dermatóloga',
      telefono: '912345678',
      foto: 'https://static.vecteezy.com/system/resources/previews/007/073/280/non_2x/nurse-and-doctor-team-ready-for-work-day-photo.jpg'
    },
    {
      nombre: 'Dr. Carlos Ramírez',
      especialidad: 'Pediatra',
      telefono: '956789123',
      foto: 'https://static.vecteezy.com/system/resources/previews/026/376/504/non_2x/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg'
    }
  ];

  // Filtrado dinámico
  const doctoresFiltrados = doctores.filter((doctor) => {
    return (
      doctor.nombre.toLowerCase().includes(filtroNombre.toLowerCase()) &&
      doctor.especialidad.toLowerCase().includes(filtroEspecialidad.toLowerCase())
    );
  });

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="header-wrapper">
          <Link className="navbar-brand" to="/">
            <img src="/assets/img/logitoo.png" alt="Logo" />
          </Link>

          <ul className="navbar-nav flex-row align-items-center">
            <li className="nav-item">
              <Link className="nav-link" to="#"><i className="fa-solid fa-house"></i> Nosotros</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#"><i className="fa-solid fa-gauge"></i> Red</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/servicios"><i className="fa-solid fa-table-cells"></i> Servicios</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/medicos"><i className="fa-solid fa-user-doctor"></i> Médicos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#"><i className="fa-solid fa-user"></i> Cuenta</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Contenido principal */}
      <div className="container py-4">
        <h2 className="mb-4">Nuestro Plantel Médico</h2>
        <p className="lead mt-3">Contamos con un equipo de profesionales altamente calificados y comprometidos con la excelencia en servicios médicos</p>
        <div className="row">
          {/* Filtros a la izquierda */}
          <div className="col-md-3 mb-4">
            <div className="card p-3">
              <h5>Filtros</h5>
              <div className="mb-3">
                <label className="form-label">Buscar por nombre:</label>
                <input
                  type="text"
                  className="form-control"
                  value={filtroNombre}
                  onChange={(e) => setFiltroNombre(e.target.value)}
                  placeholder="Ingrese el nombre..."
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Especialidad:</label>
                <input
                  type="text"
                  className="form-control"
                  value={filtroEspecialidad}
                  onChange={(e) => setFiltroEspecialidad(e.target.value)}
                  placeholder="Ingrese especialidad..."
                />
              </div>
              <div className="mb-3"></div>
              <label className="form-label">Buscar por sede:</label>
                <input
                  type="text"
                  className="form-control"
                  value={filtroNombre}
                  onChange={(e) => setFiltroSede(e.target.value)}
                  placeholder="Ingrese la sede..."/>
                  <div className="mb-3"></div>
              <label className="form-label">Buscar por turno:</label>
                <input
                  type="text"
                  className="form-control"
                  value={filtroNombre}
                  onChange={(e) => setFiltroTurno(e.target.value)}
                  placeholder="Ingrese el turno..."/>
            </div>
          </div>

          {/* Tarjetas de doctores */}
          <div className="col-md-9">
            <div className="row">
              {doctoresFiltrados.map((doctor, index) => (
                <div className="col-md-4 mb-4" key={index}>
                  <DoctorCard doctor={doctor} />
                </div>
              ))}
              {doctoresFiltrados.length === 0 && (
                <p>No se encontraron doctores con esos filtros.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListaDoctores;
