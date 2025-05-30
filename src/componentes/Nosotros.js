import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/assets/aboutus.css';
import '../styles/assets/header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const Nosotros = () => {
  return (
    <div>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="header-wrapper">
          <a className="navbar-brand" href="#">
            <img src="/assets/img/logitoo.png" alt="Logo" />
          </a>
          <ul className="navbar-nav flex-row align-items-center">
            <li className="nav-item">
              <a className="nav-link" href="nosotros"><i className="fa-solid fa-house"></i>Nosotros</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="sucursales"><i className="fa-solid fa-gauge"></i>Red</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="servicios"><i className="fa-solid fa-table-cells"></i>Servicios</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><i className="fa-solid fa-border-all"></i>Médicos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><i className="fa-solid fa-user"></i>Cuenta</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="hero" className="hero-section py-5 text-dark position-relative">
        <div className="container">
          <div className="row align-items-center justify-content-between h-100">
            <div className="col-lg-6 image-wrapper-left">
              <img src="/assets/img/hospital.png" className="img-left" alt="Imagen Nosotros" />
            </div>
            <div className="col-lg-6 section-nosotros">
              <h1 className="display-5 fw-bold">En Clínicas Mediconect eres <span className="highlight">Nuestra prioridad</span></h1>
              <p className="lead mt-3">DESCUBRE LOS VALORES DE NUESTRA EMPRESA</p>
            </div>
          </div>
        </div>
        <div className="animated-waves">
          <svg className="wave wave1" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="#ffffff" fillOpacity="0.4" d="M0,160 C240,20 480,300 720,160 C960,20 1200,300 1440,160 L1440,320 L0,320 Z"></path>
          </svg>
          <svg className="wave wave2" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="#ffffff" fillOpacity="0.6" d="M0,180 C240,40 480,320 720,180 C960,40 1200,320 1440,180 L1440,320 L0,320 Z"></path>
          </svg>
          <svg className="wave wave3" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="#ffffff" fillOpacity="1" d="M0,200 C240,60 480,340 720,200 C960,60 1200,340 1440,200 L1440,320 L0,320 Z"></path>
          </svg>
        </div>
      </section>

      {/* INFO SECTION */}
      <section className="info-section py-5">
        <div className="container" style={{ maxWidth: '900px' }}>
          <h1 className="text-center display-4 mb-4">Nacimos para cuidar de ti tanto estando cerca, como lejos</h1>
          <div className="row align-items-center" style={{ minHeight: '250px' }}>
            <div className="col-md-6 d-flex align-items-center">
              <p className="lead m-0 text-center">
                <strong>MEDICONNECT</strong> ofrece una experiencia integral marcada por la excelencia médica y la sensibilidad humana.
              </p>
            </div>
            <div className="col-md-6">
              <p className="text-justify">
                Nos enfocamos en brindar tranquilidad a nuestros pacientes y sus familias a través de una red integrada de clínicas, centros médicos y servicios móviles. Nuestro equipo combina ética profesional, calidad técnica y un trato humano en cada atención.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HISTORIA */}
      <section className="py-5 bg-light text-dark">
        <div className="container">
          <h2 className="text-center display-4 mb-4">Nuestra Historia</h2>
          <p className="text-center mb-4" style={{ maxWidth: '800px', margin: 'auto' }}>
            MEDICONNECT nació con el firme propósito de transformar la atención médica en el país. Desde nuestros inicios, hemos crecido con cada paciente, ampliando nuestros servicios, fortaleciendo nuestras especialidades y construyendo una red sólida que conecta a personas con salud de calidad, sin importar la distancia.
          </p>
        </div>
      </section>

      {/* MISIÓN Y VISIÓN */}
      <section className="py-5 bg-white text-dark">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="display-4 mb-4">Misión</h1>
              <p>
                Brindar atención médica integral con excelencia profesional, calidad humana y accesibilidad, garantizando el bienestar de nuestros pacientes en cada etapa de su vida.
              </p>
              <img src="/assets/img/mision.jpg" alt="Imagen Misión" className="img-fluid mt-3 rounded" style={{ height: '250px', objectFit: 'cover', width: '100%' }} />
            </div>
            <div className="col-md-6">
              <h1 className="display-4 mb-4">Visión</h1>
              <p>
                Ser la red de clínicas líder en salud del país, reconocida por su innovación, calidad asistencial y compromiso social, acercando la medicina a todos los rincones del Perú.
              </p>
              <img src="/assets/img/vision.jpg" alt="Imagen Visión" className="img-fluid mt-3 rounded" style={{ height: '250px', objectFit: 'cover', width: '100%' }} />
            </div>
          </div>
        </div>
      </section>

      {/* INFO FINAL */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h1 className="text-center display-4 mb-4">Tenemos lo que estás buscando</h1>
          <div className="row g-4 justify-content-center">
            <div className="col-md-3">
              <div className="p-4 border rounded shadow-sm h-100">
                <div className="mb-3 fs-1">🩺</div>
                <h5 className="fw-bold">+20 especialidades</h5>
                <p>Atención completa para ti y tu familia.</p>
                <a href="#" className="btn btn-outline-primary btn-sm">VER MÁS</a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-4 border rounded shadow-sm h-100">
                <div className="mb-3 fs-1">👨‍⚕️</div>
                <h5 className="fw-bold">Médicos expertos</h5>
                <p>Profesionales altamente calificados y humanos.</p>
                <a href="#" className="btn btn-outline-primary btn-sm">VER MÁS</a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-4 border rounded shadow-sm h-100">
                <div className="mb-3 fs-1">📍</div>
                <h5 className="fw-bold">Siempre cerca</h5>
                <p>Clínicas, postas y servicios móviles a tu alcance.</p>
                <a href="sucursales" className="btn btn-outline-primary btn-sm">VER MÁS</a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-4 border rounded shadow-sm h-100">
                <div className="mb-3 fs-1">📋</div>
                <h5 className="fw-bold">Servicios</h5>
                <p>Servicios personalizados pensados en nuestros pacientes.</p>
                <a href="servicios" className="btn btn-outline-primary btn-sm">VER MÁS</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        id="mediconect-footer"
        style={{
          background: 'linear-gradient(90deg, #2e3b83 60%, #4e54c8 100%)',
          color: '#fff',
          paddingTop: '2rem',
          paddingBottom: '1rem',
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
                  maxWidth: '200px',
                  borderRadius: '5%',
                  background: '#fff',
                  padding: '1px',
                }}
              />
            </div>
          </div>

          <hr
            style={{
              borderTop: '1px solid #7c4dff',
              opacity: 0.3,
            }}
          />

          {/* Section: Links */}
          <section>
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Mediconect</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: '60px',
                      backgroundColor: '#7c4dff',
                      height: '2px',
                    }}
                  />
                  <p>
                    Donde nos enfocamos en brindarle un servicio de calidad, porque
                    su salud es lo más importante para nosotros.
                  </p>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Servicios</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: '60px',
                      backgroundColor: '#7c4dff',
                      height: '2px',
                    }}
                  />
                  <p>
                    <a
                      href="servicio-persona.html"
                      style={{ color: '#fff', textDecoration: 'none' }}
                    >
                      Personales
                    </a>
                  </p>
                  <p>
                    <a
                      href="servicio-evento.html"
                      style={{ color: '#fff', textDecoration: 'none' }}
                    >
                      Eventos
                    </a>
                  </p>
                  <p>
                    <a href="#!" style={{ color: '#fff', textDecoration: 'none' }}>
                      Médicos
                    </a>
                  </p>
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold">Contáctanos</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: '60px',
                      backgroundColor: '#7c4dff',
                      height: '2px',
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
              </div>
            </div>
          </section>

          <hr
            style={{
              borderTop: '1px solid #7c4dff',
              opacity: 0.2,
            }}
          />
          <div
            className="text-center"
            style={{ fontSize: '0.9rem', color: '#bdbdbd' }}
          >
            © 2025 Mediconect. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Nosotros;
