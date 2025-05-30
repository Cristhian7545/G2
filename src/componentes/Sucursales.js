import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/assets/sucursal.css';
import '../styles/assets/header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Sucursales = () => {
  const [sucursales, setSucursales] = useState([]);
  const [regionFiltro, setRegionFiltro] = useState('all');
  const [modal, setModal] = useState({ visible: false, title: '', description: '', mapUrl: '' });

  useEffect(() => {
    fetch('http://localhost:8080/api/sedes')
      .then((res) => res.json())
      .then((data) => setSucursales(data))
      .catch((err) => console.error('Error al cargar las sedes:', err));
  }, []);

  const filtrarSucursales = () => {
    return regionFiltro === 'all'
      ? sucursales
      : sucursales.filter((s) => s.region.toLowerCase() === regionFiltro);
  };

  const mostrarModal = (nombre, descripcion, mapaUrl) => {
    setModal({ visible: true, title: nombre, description: descripcion, mapUrl: mapaUrl });
  };

  const cerrarModal = () => {
    setModal({ visible: false, title: '', description: '', mapUrl: '' });
  };

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
              <Link className="nav-link" to="/Nosotros"><i className="fa-solid fa-house"></i> Nosotros</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/sucursales"><i className="fa-solid fa-gauge"></i> Red</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/servicios"><i className="fa-solid fa-table-cells"></i> Servicios</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#"><i className="fa-solid fa-border-all"></i> Médicos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#"><i className="fa-solid fa-user"></i> Cuenta</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Contenido principal */}
      <section className="fondo-section">

        {/* Filtro */}
        <div className="container my-5">
          <h2 className="fw-bold text-center mb-4">NUESTRAS SUCURSALES</h2>
          <div className="row justify-content-center align-items-center mb-4">
            <div className="col-12 col-sm-3 text-center">
              <label htmlFor="region" className="form-label">Filtrar por región:</label>
            </div>
            <div className="col-12 col-sm-3">
              <select id="region" className="form-select" onChange={(e) => setRegionFiltro(e.target.value)}>
                <option value="all">Todo</option>
                <option value="piura">Piura</option>
                <option value="arequipa">Arequipa</option>
                <option value="lima">Lima</option>
              </select>
            </div>
          </div>

          {/* Lista de sucursales */}
          <div className="row g-4">
            {filtrarSucursales().map((sede, index) => (
              <div
                key={index}
                className="sucursal col-md-4"
                onClick={() => mostrarModal(sede.nombre, sede.descripcion, sede.mapaUrl)}
              >
                <img src={sede.imagenUrl} alt={sede.nombre} className="img-fluid" />
                <h2 className="fw-bold text-center mt-3" style={{ fontSize: '1.2rem', color: '#333' }}>{sede.nombre}</h2>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {modal.visible && (
          <div className="modal d-block" style={{ background: 'rgba(0,0,0,0.6)' }} onClick={cerrarModal}>
            <div className="modal-content mx-auto p-4" style={{ background: '#fff', width: '90%', maxWidth: '600px', position: 'relative' }} onClick={(e) => e.stopPropagation()}>
              <span className="close" onClick={cerrarModal} style={{ position: 'absolute', top: '10px', right: '20px', fontSize: '28px', cursor: 'pointer' }}>&times;</span>
              <h2>{modal.title}</h2>
              <p>{modal.description}</p>
              <iframe
                src={modal.mapUrl}
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Ubicación"
              ></iframe>
            </div>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer
        id="mediconect-footer"
        className="mediconect-footer"
        style={{
          background: "linear-gradient(90deg, #2e3b83 60%, #4e54c8 100%)",
          color: "#fff",
          paddingTop: "2rem",
          paddingBottom: "1rem",
        }}
      >
        <div className="container">
          {/* Logo centrado arriba */}
          <div className="row justify-content-center mb-4">
            <div className="col-12 col-md-3 text-center">
              <img
                src="assets/img/logitoo.png"
                alt="Logo Mediconect"
                style={{
                  maxWidth: "200px",
                  borderRadius: "5%",
                  background: "#fff",
                  padding: "1px",
                }}
              />
            </div>
          </div>

          <hr
            style={{
              borderTop: "1px solid #7c4dff",
              opacity: 0.3,
            }}
          />

          {/* Section: Links */}
          <section>
            <div className="container text-center text-md-start mt-5">
              {/* Grid row */}
              <div className="row mt-3">
                {/* Grid column */}
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  {/* Content */}
                  <h6 className="text-uppercase fw-bold">Mediconect</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: "60px",
                      backgroundColor: "#7c4dff",
                      height: "2px",
                    }}
                  />
                  <p>
                    Donde nos enfocamos en brindarle un servicio de calidad,
                    porque su salud es lo más importante para nosotros.
                  </p>
                </div>
                {/* Grid column */}

                {/* Grid column */}
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold">Servicios</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: "60px",
                      backgroundColor: "#7c4dff",
                      height: "2px",
                    }}
                  />
                  <p>
                    <a
                      href="servicio-persona.html"
                      className="text-white"
                      style={{ textDecoration: "none" }}
                    >
                      Personales
                    </a>
                  </p>
                  <p>
                    <a
                      href="servicio-evento.html"
                      className="text-white"
                      style={{ textDecoration: "none" }}
                    >
                      Eventos
                    </a>
                  </p>
                  <p>
                    <a
                      href="#!"
                      className="text-white"
                      style={{ textDecoration: "none" }}
                    >
                      Médicos
                    </a>
                  </p>
                </div>
                {/* Grid column */}

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold">Contáctanos</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: "60px",
                      backgroundColor: "#7c4dff",
                      height: "2px",
                    }}
                  />
                  <p>
                    <i className="fas fa-envelope mr-3"></i> Mediconect@gmail.com
                  </p>
                  <p>
                    <i className="fas fa-phone mr-3"></i> + 01 234 567 88
                  </p>
                  <p>
                    <i className="fas fa-print mr-3"></i> + 01 234 567 89
                  </p>
                </div>
                {/* Grid column */}
              </div>
              {/* Grid row */}
            </div>
          </section>
          {/* Section: Links */}

          <hr
            style={{
              borderTop: "1px solid #7c4dff",
              opacity: 0.2,
            }}
          />
          <div
            className="text-center"
            style={{ fontSize: "0.9rem", color: "#bdbdbd" }}
          >
            © 2025 Mediconect. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Sucursales;
