import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/assets/servicios.css';
import '../styles/assets/header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Servicios = () => {
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
              <Link className="nav-link" to="/Nosotros"><i className="fa-solid fa-house"></i>Nosotros</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/sucursales"><i className="fa-solid fa-gauge"></i>Red</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/servicios"><i className="fa-solid fa-table-cells"></i>Servicios</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#"><i className="fa-solid fa-border-all"></i>Médicos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#"><i className="fa-solid fa-user"></i>Cuenta</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero-section py-5 text-dark position-relative">
        <div className="container">
          <div className="row align-items-center justify-content-between h-100">

            {/* Text Section */}
            <div className="col-lg-6 section-servicios">
              <h1 className="display-5 fw-bold">
                Nuestros servicios médicos <span className="highlight">Pensados en tí</span>
              </h1>
              <p className="lead mt-3">Descubre cómo podemos ayudarte a vivir mejor</p>
              <div className="d-flex gap-3 mt-4">
                <Link to="/contact" className="btn btn-success btn-lg">Contáctanos</Link>
                <a href="https://youtu.be/xEax06A7qtw?feature=shared" target="_blank" rel="noreferrer" className="btn btn-outline-dark d-flex align-items-center">
                  <i className="bi bi-play-circle me-2"></i> Video
                </a>
              </div>
            </div>

            {/* Images Section */}
            <div className="col-lg-6 d-flex justify-content-end align-items-center">
              <div className="d-flex justify-content-end align-items-end position-relative floating-image-wrapper">
                <img src="/assets/img/servi3.png" className="floating-img img-left" alt="Imagen 1" />
                <img src="/assets/img/servi4.png" className="floating-img img-right" alt="Imagen 2" />
              </div>
            </div>

          </div>
        </div>

        {/* Animated Waves */}
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

      {/* Services Section */}
      <section className="service py-5">
        <div className="container py-5">
          <div className="text-center mx-auto pb-5" style={{ maxWidth: '800px' }}>
            <h4 className="text-primary">Nuestros Servicios</h4>
            <h1 className="display-4 mb-4">Lo que ofrecemos</h1>
            <p className="mb-0 lead">Contamos con los mejores servicios diseñados para ti.</p>
          </div>
          <div className="row g-4 justify-content-center">

            <div className="col-md-6">
              <div className="service-item overlay-top">
                <div className="service-img">
                  <img src="/assets/img/servi6.png" alt="Servicio para personas" />
                  <div className="service-icon p-3">
                    <i className="bi bi-heart-pulse fs-2"></i>
                  </div>
                </div>
                <div className="service-content p-4 hover-overlay">
                  <div className="service-content-inner">
                    <h4 className="mb-4">Servicio para personas</h4>
                    <p className="mb-4">Cuidamos tu salud de forma cercana y personalizada</p>
                    <Link to="/servicio-persona" className="btn btn-primary rounded-pill py-2 px-4">Leer Más</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="service-item overlay-top">
                <div className="service-img">
                  <img src="/assets/img/servi5.png" alt="Eventos de salud" className="img-fluid rounded-top w-100" />
                  <div className="service-icon p-3">
                    <i className="bi bi-shield-check fs-2"></i>
                  </div>
                </div>
                <div className="service-content p-4 hover-overlay">
                  <div className="service-content-inner">
                    <h4 className="mb-4">Eventos de salud</h4>
                    <p className="mb-4">Iniciativas que promueven el bienestar en tu comunidad.</p>
                    <Link to="/servicio-evento" className="btn btn-primary rounded-pill py-2 px-4">Leer Más</Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <div className="container py-5">
        <div className="text-center mb-5">
          <h4 className="text-primary">Testimonios</h4>
          <h1 className="display-5">Lo que dicen nuestros clientes</h1>
          <p className="texto-descripcion lead">
            <br />
            Nuestro compromiso con la excelencia se refleja en la satisfacción de quienes han confiado en nosotros.
          </p>
        </div>

        <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">

            {/* Slide 1 */}
            <div className="carousel-item active">
              <div className="row">
                <div className="col-md-6">
                  <div className="testimonial-card d-flex">
                    <div className="col-4 pe-3">
                      <img
                        src="https://randomuser.me/api/portraits/men/12.jpg"
                        className="img-fluid testimonial-img"
                        alt="cliente 1"
                      />
                    </div>
                    <div className="col-8">
                      <h5>Juan Pérez</h5>
                      <p className="text-muted mb-1">Diseñador</p>
                      <div className="text-warning mb-2">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                      </div>
                      <p>Excelente atención y resultados. ¡Volveré sin dudarlo!</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="testimonial-card d-flex">
                    <div className="col-4 pe-3">
                      <img
                        src="https://randomuser.me/api/portraits/women/24.jpg"
                        className="img-fluid testimonial-img"
                        alt="cliente 2"
                      />
                    </div>
                    <div className="col-8">
                      <h5>Ana Gómez</h5>
                      <p className="text-muted mb-1">Arquitecta</p>
                      <div className="text-warning mb-2">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                      </div>
                      <p>Muy profesionales. Recomendado al 100%.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="carousel-item">
              <div className="row">
                <div className="col-md-6">
                  <div className="testimonial-card d-flex">
                    <div className="col-4 pe-3">
                      <img
                        src="https://randomuser.me/api/portraits/men/65.jpg"
                        className="img-fluid testimonial-img"
                        alt="cliente 3"
                      />
                    </div>
                    <div className="col-8">
                      <h5>Pedro Ramírez</h5>
                      <p className="text-muted mb-1">Desarrollador</p>
                      <div className="text-warning mb-2">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                      </div>
                      <p>Buen servicio, aunque podría mejorar un poco la comunicación.</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="testimonial-card d-flex">
                    <div className="col-4 pe-3">
                      <img
                        src="https://randomuser.me/api/portraits/women/41.jpg"
                        className="img-fluid testimonial-img"
                        alt="cliente 4"
                      />
                    </div>
                    <div className="col-8">
                      <h5>Laura Sánchez</h5>
                      <p className="text-muted mb-1">Marketing</p>
                      <div className="text-warning mb-2">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                        <i className="far fa-star"></i>
                      </div>
                      <p>Una experiencia fluida y fácil. Muy contenta con el resultado.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="prev"
          >
            <span>
              <i className="fas fa-chevron-left text-white"></i>
            </span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="next"
          >
            <span>
              <i className="fas fa-chevron-right text-white"></i>
            </span>
          </button>
        </div>
      </div>

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

export default Servicios;
