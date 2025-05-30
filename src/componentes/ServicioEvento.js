import React, { useEffect } from 'react';
import '../styles/assets/persona.css';
import '../styles/assets/header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const ServicioEvento = () => {

  useEffect(() => {
    const handleOpenModal = (id) => {
      const modal = document.getElementById(id);
      if (modal) modal.style.display = 'block';
    };
    const handleCloseModal = (id) => {
      const modal = document.getElementById(id);
      if (modal) modal.style.display = 'none';
    };
    window.openModal = handleOpenModal;
    window.closeModal = handleCloseModal;

    // Cerrar modal si se clickea fuera
    const handleClickOutside = (event) => {
      if (event.target.className === 'modal') {
        event.target.style.display = 'none';
      }
    };
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="header-wrapper">
          <a className="navbar-brand" href="#">
            <img src="/assets/img/logitoo.png" alt="Logo" />
          </a>
          <ul className="navbar-nav flex-row align-items-center">
            <li className="nav-item">
              <a className="nav-link" href="/nosotros"><i className="fa-solid fa-house"></i>Nosotros</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/sucursales"><i className="fa-solid fa-gauge"></i>Red</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/servicios"><i className="fa-solid fa-table-cells"></i>Servicios</a>
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

      {/* Carousel */}
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/assets/img/servi7.png" className="d-block w-100" alt="Imagen 1" />
            <div className="carousel-caption text-start">
              <h1>Jornadas de Prevención y Detección Temprana</h1>
              <p>Espacios gratuitos donde las personas pueden acceder a controles médicos básicos, charlas informativas y orientación profesional para cuidar su salud.</p>
            </div>
          </div>

          <div className="carousel-item">
            <img src="/assets/img/servi8.png" className="d-block w-100" alt="Imagen 2" />
            <div className="carousel-caption text-end">
              <h1>Actividades Comunitarias de Bienestar</h1>
              <p>Talleres, campañas y actividades que promueven hábitos saludables, desde nutrición hasta salud mental, pensados para toda la familia.</p>
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Main section */}
      <section className="pagina-servicios">
        <section className="servicios-container">
          <div className="experiencia-box">
            <h1>Eventos de<br />Salud</h1>
          </div>

          <div className="servicios-contenido">
            <h6 className="subtitulo">NUESTROS SERVICIOS</h6>
            <h1 className="titulo-principal">Explora nuestro servicios</h1>

            <div className="tarjetas-servicio">
              <div className="tarjetas-scroll-wrapper">
                <div className="tarjetas-servicio scroll-horizontal">

                  {/* Card 1 */}
                  <div className="tarjeta">
                    <div className="icono-servicio">
                      <i className="fa fa-water"></i>
                    </div>
                    <h4>Drain Repair</h4>
                    <p>Reparamos tuberías con eficiencia y tecnología.</p>
                    <ul>
                      <li>✔ Calidad garantizada</li>
                      <li>✔ Atención personalizada</li>
                      <li>✔ Soporte 24/7</li>
                    </ul>
                    <button className="btn-leer-mas" onClick={() => window.openModal('modalE1')}>
                      Read More <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>

                  {/* Modal 1 */}
                  <div id="modalE1" className="modal">
                    <div className="modal-content">
                      <span className="close" onClick={() => window.closeModal('modalE1')}>&times;</span>
                      <div className="modal-header">
                        <h2>Drain Repair</h2>
                      </div>
                      <div className="modal-body">
                        <h3>Subtítulo de la Reparación de Drenaje</h3>
                        <p>Aquí puedes agregar una descripción más detallada del servicio de reparación de drenajes. Describa los beneficios, el proceso o cualquier detalle relevante.</p>
                        <img src="https://via.placeholder.com/600x400" alt="Imagen de reparación de drenaje" />
                      </div>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="tarjeta">
                    <div className="icono-servicio"><i className="fas fa-tint"></i></div>
                    <h4>Water Heater Repair</h4>
                    <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo.</p>
                    <ul>
                      <li><i className="fa fa-check text-success"></i> Quality Service</li>
                      <li><i className="fa fa-check text-success"></i> Customer Satisfaction</li>
                      <li><i className="fa fa-check text-success"></i> Support 24/7</li>
                    </ul>
                    <button className="btn-leer-mas" onClick={() => window.openModal('modalE2')}>
                      Read More <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>

                  {/* Modal 2 */}
                  <div id="modalE2" className="modal">
                    <div className="modal-content">
                      <span className="close" onClick={() => window.closeModal('modalE2')}>&times;</span>
                      <div className="modal-header">
                        <h2>Water Heater Repair</h2>
                      </div>
                      <div className="modal-body">
                        <h3>Subtítulo de Reparación de Calentadores de Agua</h3>
                        <p>Este modal contiene información más detallada sobre el servicio de reparación de calentadores de agua. Aquí puedes agregar una descripción completa del servicio y los beneficios.</p>
                        <img src="https://via.placeholder.com/600x400" alt="Imagen de calentador de agua" />
                      </div>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="tarjeta">
                    <div className="icono-servicio"><i className="fas fa-water"></i></div>
                    <h4>Drain Repair</h4>
                    <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo.</p>
                    <ul>
                      <li><i className="fa fa-check text-success"></i> Quality Service</li>
                      <li><i className="fa fa-check text-success"></i> Customer Satisfaction</li>
                      <li><i className="fa fa-check text-success"></i> Support 24/7</li>
                    </ul>
                    <button className="btn-leer-mas" onClick={() => window.openModal('modalE3')}>
                      Read More <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>

                  {/* Modal 3 */}
                  <div id="modalE3" className="modal">
                    <div className="modal-content">
                      <span className="close" onClick={() => window.closeModal('modalE3')}>&times;</span>
                      <div className="modal-header">
                        <h2>Drain Repair</h2>
                      </div>
                      <div className="modal-body">
                        <h3>Subtítulo de la Reparación de Drenaje</h3>
                        <p>Aquí puedes agregar una descripción más detallada del servicio de reparación de drenajes. Describa los beneficios, el proceso o cualquier detalle relevante.</p>
                        <img src="https://via.placeholder.com/600x400" alt="Imagen de reparación de drenaje" />
                      </div>
                    </div>
                  </div>

                  {/* Card 4 */}
                  <div className="tarjeta">
                    <div className="icono-servicio"><i className="fas fa-water"></i></div>
                    <h4>Drain Repair</h4>
                    <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo.</p>
                    <ul>
                      <li><i className="fa fa-check text-success"></i> Quality Service</li>
                      <li><i className="fa fa-check text-success"></i> Customer Satisfaction</li>
                      <li><i className="fa fa-check text-success"></i> Support 24/7</li>
                    </ul>
                    <button className="btn-leer-mas" onClick={() => window.openModal('modalE4')}>
                      Read More <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>

                  {/* Modal 4 */}
                  <div id="modalE4" className="modal">
                    <div className="modal-content">
                      <span className="close" onClick={() => window.closeModal('modalE4')}>&times;</span>
                      <div className="modal-header">
                        <h2>Drain Repair</h2>
                      </div>
                      <div className="modal-body">
                        <h3>Subtítulo de la Reparación de Drenaje</h3>
                        <p>Aquí puedes agregar una descripción más detallada del servicio de reparación de drenajes. Describa los beneficios, el proceso o cualquier detalle relevante.</p>
                        <img src="https://via.placeholder.com/600x400" alt="Imagen de reparación de drenaje" />
                      </div>
                    </div>
                  </div>

                  {/* Card 5 */}
                  <div className="tarjeta">
                    <div className="icono-servicio"><i className="fas fa-toilet"></i></div>
                    <h4>Toilet Pipe Repair</h4>
                    <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo.</p>
                    <ul>
                      <li><i className="fa fa-check text-success"></i> Quality Service</li>
                      <li><i className="fa fa-check text-success"></i> Customer Satisfaction</li>
                      <li><i className="fa fa-check text-success"></i> Support 24/7</li>
                    </ul>
                    <button className="btn-leer-mas" onClick={() => window.openModal('modalE5')}>
                      Read More <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>

                  {/* Modal 5 */}
                  <div id="modalE5" className="modal">
                    <div className="modal-content">
                      <span className="close" onClick={() => window.closeModal('modalE5')}>&times;</span>
                      <div className="modal-header">
                        <h2>Drain Repair</h2>
                      </div>
                      <div className="modal-body">
                        <h3>Subtítulo de la Reparación de Drenaje</h3>
                        <p>Aquí puedes agregar una descripción más detallada del servicio de reparación de drenajes. Describa los beneficios, el proceso o cualquier detalle relevante.</p>
                        <img src="https://via.placeholder.com/600x400" alt="Imagen de reparación de drenaje" />
                      </div>
                    </div>
                  </div>

                </div>

                {/* Scroll dots */}
                <div className="scroll-dots">
                  <span className="dot" data-index="0"></span>
                  <span className="dot" data-index="1"></span>
                  <span className="dot" data-index="2"></span>
                </div>

              </div>
            </div>
          </div>
        </section>
      </section>
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

export default ServicioEvento;
