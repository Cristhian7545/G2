import React, { useEffect } from 'react';
import '../styles/assets/persona.css';
import '../styles/assets/header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const ServicioPersona = () => {

  // Funciones para abrir y cerrar modales
  const openModal = (modalId) => {
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = 'block';
  };

  const closeModal = (modalId) => {
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = 'none';
  };

  // Cerrar modal si se hace clic fuera
  useEffect(() => {
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
              <a className="nav-link" href="#"><i className="fa-solid fa-house"></i>Nosotros</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#"><i className="fa-solid fa-gauge"></i>Red</a>
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

      {/* Carrusel */}
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/assets/img/servi1.png" className="d-block w-100" alt="Imagen 1" />
            <div className="carousel-caption text-start">
              <h1>Cuidamos de Ti, en Cada Etapa</h1>
              <p>Ofrecemos soluciones efectivas y a medida para cada necesidad.</p>
            </div>
          </div>

          <div className="carousel-item">
            <img src="/assets/img/servi2.png" className="d-block w-100" alt="Imagen 2" />
            <div className="carousel-caption text-end">
              <h1>Innovación y Calidad</h1>
              <p>Nos adaptamos a tus necesidades con los mejores estándares.</p>
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

      {/* Sección principal */}
      <section className="pagina-servicios">
        <section className="servicios-container">
          <div className="experiencia-box">
            <h1>
              Servicio para
              <br />
              Personas
            </h1>
          </div>

          <div className="servicios-contenido">
            <h6 className="subtitulo">NUESTROS SERVICIOS</h6>
            <h1 className="titulo-principal">Explora los servicios que ofrecemos</h1>

            <div className="tarjetas-servicio">
              <div className="tarjetas-scroll-wrapper">
                <div className="tarjetas-servicio scroll-horizontal">

                  {/* Tarjeta 1 */}
                  <div className="tarjeta">
                    <div className="icono-servicio">
                      <i className="fa fa-water"></i>
                    </div>
                    <h4>Consultas médicas</h4>
                    <p>
                      Contamos con consultas generales y especializadas, así como servicios de urgencias y seguimiento para enfermedades crónicas
                    </p>
                    <ul>
                      <li><i className="fa fa-check text-success"></i> Evaluaciones generales de salud</li>
                      <li><i className="fa fa-check text-success"></i> Diagnóstico y tratamiento de enfermedades comunes</li>
                      <li><i className="fa fa-check text-success"></i> Chequeos preventivos y programas de salud</li>
                      <li><i className="fa fa-check text-success"></i> Consultas pediátricas</li>
                      <li><i className="fa fa-check text-success"></i> Apoyo psicológico y consultas emocionales</li>
                    </ul>
                    <button className="btn-leer-mas" onClick={() => openModal('modal1')}>
                      Detalle <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>

                  {/* Modal 1 */}
                  <div id="modal1" className="modal">
                    <div className="modal-content">
                      <span className="close" onClick={() => closeModal('modal1')}>&times;</span>
                      <div className="modal-header">
                        <h2>Consultas médicas</h2>
                      </div>
                      <div className="modal-body">
                        <h3>Descripción del servicio</h3>
                        <p>
                          Las consultas médicas que ofrecemos están diseñadas para proporcionar atención integral y personalizada a nuestros pacientes, abordando una amplia gama de problemas de salud.
                          Durante la consulta, se evalúa el estado general de salud del paciente, se revisan antecedentes médicos y familiares, y se realizan exámenes físicos o estudios diagnósticos según sea necesario.
                          Nuestro objetivo es ofrecer una atención de calidad que no solo resuelva problemas médicos inmediatos, sino que también contribuya a la prevención de futuros problemas de salud.
                        </p>
                        <img src="/assets/img/se1.png" alt="Imagen de reparación de drenaje" />
                        <br />
                        <br />
                        <h3>Beneficios</h3>
                        <ul>
                          <li><b>Acceso a Profesionales Especializados:</b> Consultas con médicos capacitados y con experiencia en diversas áreas de la salud.</li>
                          <li><b>Diagnóstico y Tratamiento Preciso:</b> Evaluación completa del estado de salud para ofrecer diagnósticos certeros y planes de tratamiento efectivos.</li>
                          <li><b>Mejora en la Calidad de Vida: </b> A través del tratamiento adecuado y la orientación, buscamos mejorar la calidad de vida del paciente.</li>
                          <li><b>Seguimiento Continuo: </b>Nuestro equipo asegura un seguimiento adecuado de las condiciones de salud a lo largo del tiempo, garantizando una atención médica continua.</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Tarjeta 2 */}
                  <div className="tarjeta">
                    <div className="icono-servicio"><i className="fas fa-tint"></i></div>
                    <h4>Examenes de laboratorio</h4>
                    <p>
                      Amplia gama de exámenes de laboratorio para apoyar el diagnóstico preciso y el seguimiento de la salud de nuestros pacientes.
                    </p>
                    <ul>
                      <li><i className="fa fa-check text-success"></i> Análisis de sangre </li>
                      <li><i className="fa fa-check text-success"></i> Pruebas de colesterol y glucosa</li>
                      <li><i className="fa fa-check text-success"></i> Pruebas de función tiroidea</li>
                      <li><i className="fa fa-check text-success"></i> Pruebas de embarazo y hormonas</li>
                      <li><i className="fa fa-check text-success"></i> Test de alergias e intolerancias</li>
                    </ul>
                    <button className="btn-leer-mas" onClick={() => openModal('modal2')}>
                      Detalle <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>

                  {/* Modal 2 */}
                  <div id="modal2" className="modal">
                    <div className="modal-content">
                      <span className="close" onClick={() => closeModal('modal2')}>&times;</span>
                      <div className="modal-header">
                        <h2>Examenes de laboratorio</h2>
                      </div>
                      <div className="modal-body">
                        <h3>Descripción del servicio</h3>
                        <p>
                          El servicio de exámenes de laboratorio permite obtener información precisa y confiable sobre el estado de salud de cada paciente, facilitando el diagnóstico, seguimiento y prevención de enfermedades.
                          Contamos con un laboratorio clínico equipado con tecnología moderna y personal altamente capacitado que garantiza resultados rápidos, seguros y confidenciales.
                          Estos exámenes son fundamentales para detectar alteraciones antes de que aparezcan síntomas, monitorear tratamientos médicos y confirmar diagnósticos clínicos con mayor exactitud.
                          Nuestros procesos están alineados con altos estándares de calidad y bioseguridad, brindando tranquilidad tanto a los pacientes como a los profesionales de salud que dependen de estos resultados para tomar decisiones acertadas en el tratamiento.
                        </p>
                        <img src="/assets/img/se2.png" alt="Imagen de calentador de agua" />
                        <br />
                        <br />
                        <h3>Beneficios</h3>
                        <ul>
                          <li><b>Diagnóstico Temprano y Preciso: </b> Permiten detectar enfermedades en etapas iniciales, incluso antes de que aparezcan síntomas evidentes.</li>
                          <li><b>Prevención de Enfermedades: </b> Los chequeos regulares permiten anticiparse a posibles condiciones de salud y tomar medidas preventivas.</li>
                          <li><b>Resultados Confiables y Rápidos: </b> Utilizamos tecnología moderna que asegura precisión y entrega de resultados en tiempos óptimos.</li>
                          <li><b>Apoyo al Diagnóstico Médico: </b> Complementan las consultas clínicas proporcionando datos objetivos y específicos del estado del paciente.</li>
                          <li><b>Confidencialidad Garantizada: </b> Manejamos toda la información con estrictos protocolos de privacidad y seguridad de datos.</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Tarjeta 3 */}
                  <div className="tarjeta">
                    <div className="icono-servicio"><i className="fas fa-water"></i></div>
                    <h4>Nutrición y bienestar</h4>
                    <p>Con planes personalizados que promueven hábitos alimenticios saludables.</p>
                    <ul>
                      <li><i className="fa fa-check text-success"></i> Asesoramiento nutricional personalizado</li>
                      <li><i className="fa fa-check text-success"></i> Suplementación nutricional recomendada</li>
                      <li><i className="fa fa-check text-success"></i> Educación sobre alimentación saludable y hábitos de vida</li>
                      <li><i className="fa fa-check text-success"></i> Control y prevención de la obesidad</li>
                      <li><i className="fa fa-check text-success"></i> Evaluación de composición corporal</li>
                    </ul>
                    <button className="btn-leer-mas" onClick={() => openModal('modal3')}>
                      Detalle <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>

                  {/* Modal 3 */}
                  <div id="modal3" className="modal">
                    <div className="modal-content">
                      <span className="close" onClick={() => closeModal('modal3')}>&times;</span>
                      <div className="modal-header">
                        <h2>Nutrición y bienestar</h2>
                      </div>
                      <div className="modal-body">
                        <h3>Descripción del servicio</h3>
                        <p>
                          Está enfocada en mejorar la calidad de vida de nuestros pacientes a través de una alimentación equilibrada, hábitos saludables y el manejo integral del cuerpo y la mente.
                          Nuestros nutricionistas clínicos trabajan de forma personalizada para elaborar planes alimenticios adaptados a las necesidades específicas de cada persona, considerando su estado de salud, estilo de vida, edad, actividad física y objetivos personales.
                          Este servicio no solo está destinado a personas con enfermedades crónicas como diabetes, hipertensión u obesidad, sino también a quienes buscan mantener un peso saludable, mejorar su rendimiento deportivo o simplemente aprender a comer mejor.
                        </p>
                        <img src="/assets/img/se3.png" alt="Imagen de reparación de drenaje" />
                        <br />
                        <br />
                        <h3>Beneficios</h3>
                        <ul>
                          <li><b>Prevención y Control de Enfermedades:</b> Apoyo en el tratamiento de patologías como obesidad, diabetes, hipertensión, colesterol alto, entre otras.</li>
                          <li><b>Mejora en la Calidad de Vida:</b> Al adoptar una alimentación más saludable y equilibrada, se mejora el estado de ánimo y el sueño.</li>
                          <li><b>Educación Alimentaria: </b> Orientación clara sobre cómo leer etiquetas, elegir alimentos adecuados y mantener buenos hábitos alimenticios a largo plazo.</li>
                          <li><b>Enfoque Holístico: </b>Se trabaja en la relación entre alimentación, emociones, actividad física y estilo de vida saludable.</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Tarjeta 4 */}
                  <div className="tarjeta">
                    <div className="icono-servicio"><i className="fas fa-water"></i></div>
                    <h4>Dr. Online</h4>
                    <p>Consultas médicas virtuales con nuestros profesionales de salud.</p>
                    <ul>
                      <li><i className="fa fa-check text-success"></i> Consultas médicas generales a distancia</li>
                      <li><i className="fa fa-check text-success"></i> Recetas médicas electrónicas y recomendaciones de tratamiento</li>
                      <li><i className="fa fa-check text-success"></i> Asesoramiento y consultas de salud mental</li>
                      <li><i className="fa fa-check text-success"></i> Orientación sobre resultados de exámenes médicos</li>
                      <li><i className="fa fa-check text-success"></i> Consultas de urgencias menores</li>
                    </ul>
                    <button className="btn-leer-mas" onClick={() => openModal('modal4')}>
                      Detalle <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>

                  {/* Modal 4 */}
                  <div id="modal4" className="modal">
                    <div className="modal-content">
                      <span className="close" onClick={() => closeModal('modal4')}>&times;</span>
                      <div className="modal-header">
                        <h2>Dr. Online</h2>
                      </div>
                      <div className="modal-body">
                        <h3>Descripción del servicio</h3>
                        <p>
                          Nuestro servicio de Doctor Online te permite acceder a atención médica profesional desde cualquier lugar, de forma rápida, segura y sin necesidad de salir de casa.
                          A través de videollamadas, nuestros médicos generales y especialistas pueden ayudarte a resolver dudas de salud, evaluar síntomas, interpretar exámenes, emitir diagnósticos iniciales y recetar tratamientos.
                          Doctor Online es ideal para quienes tienen dificultad para trasladarse, cuentan con poco tiempo disponible, o simplemente desean recibir atención médica desde la comodidad de su hogar.
                          Todo con confidencialidad, trato humano y respaldo profesional.
                        </p>
                        <img src="/assets/img/se4.png" alt="Imagen de reparación de drenaje" />
                        <br />
                        <br />
                        <h3>Beneficios</h3>
                        <ul>
                          <li><b>Acceso Inmediato a un Médico:</b> Consulta rápida sin listas de espera ni desplazamientos.</li>
                          <li><b>Ahorro de Tiempo y Comodidad: </b> Evita traslados, salas de espera y aprovecha mejor tu tiempo.</li>
                          <li><b>Confidencialidad Asegurada: </b> Las consultas se realizan en plataformas seguras y con total respeto por tu privacidad.</li>
                          <li><b>Atención desde Cualquier Lugar: </b>Solo necesitas un dispositivo con conexión a internet para recibir atención médica.</li>
                          <li><b>Atención Preventiva y Educativa: </b>También se brinda orientación sobre hábitos saludables, prevención de enfermedades y cuidado diario.</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Tarjeta 5 */}
                  <div className="tarjeta">
                    <div className="icono-servicio"><i className="fas fa-toilet"></i></div>
                    <h4>Atención Domiciliaria</h4>
                    <p>Servicios personalizados para pacientes que requieren cuidados especiales.</p>
                    <ul>
                      <li><i className="fa fa-check text-success"></i> Atención a pacientes postquirúrgicos o con movilidad reducida</li>
                      <li><i className="fa fa-check text-success"></i> Administración de medicamentos y tratamientos intravenosos</li>
                      <li><i className="fa fa-check text-success"></i> Rehabilitación física y fisioterapia</li>
                      <li><i className="fa fa-check text-success"></i> Control de signos vitales y evaluación médica periódica</li>
                      <li><i className="fa fa-check text-success"></i> Asistencia para procedimientos médicos menores en casa</li>
                    </ul>
                    <button className="btn-leer-mas" onClick={() => openModal('modal5')}>
                      Detalle <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>

                  {/* Modal 5 */}
                  <div id="modal5" className="modal">
                    <div className="modal-content">
                      <span className="close" onClick={() => closeModal('modal5')}>&times;</span>
                      <div className="modal-header">
                        <h2>Atención domiciliaria</h2>
                      </div>
                      <div className="modal-body">
                        <h3>Descripción del servicio</h3>
                        <p>
                          La atención domiciliaria es una solución integral pensada para brindar cuidados médicos y de salud directamente en el hogar del paciente.
                          Es ideal para personas con movilidad reducida, en recuperación postquirúrgica, con enfermedades crónicas o en estado de vulnerabilidad.
                          Todo esto con un enfoque centrado en el bienestar del paciente y la tranquilidad de su entorno familiar.
                          Este tipo de atención permite continuar con el tratamiento o control médico sin necesidad de salir de casa,
                          con el mismo estándar de calidad que recibirías en una clínica, pero adaptado a tus condiciones y necesidades personales.
                        </p>
                        <img src="/assets/img/se5.png" alt="Imagen de reparación de drenaje" />
                        <br />
                        <br />
                        <h3>Beneficios</h3>
                        <ul>
                          <li><b>Comodidad Total: </b> Recibe atención profesional sin salir del hogar, evitando traslados innecesarios.</li>
                          <li><b>Ideal para Pacientes con Movilidad Reducida: </b> Perfecto para personas mayores, pacientes en recuperación o con enfermedades que dificultan el desplazamiento.</li>
                          <li><b>Tranquilidad para la Familia: </b> Saber que el paciente está atendido en casa genera mayor confianza y cercanía para sus seres queridos.</li>
                          <li><b>Atención Humanizada: </b>El trato cercano y en un ambiente familiar mejora la experiencia del paciente y favorece su recuperación.</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Puntos de navegación */}
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

export default ServicioPersona;
