import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/assets/header.css';  // asumiendo que tienes este CSS
import '../styles/assets/login.css';   // asumiendo que tienes este CSS

const Login = () => {
  return (
    <>
      {/* Header / Navbar */}
      <header className="p-3 mb-3 border-bottom bg-light">
        <div className="container">
          <h3 className="text-center">Navbar de ejemplo</h3>
        </div>
      </header>

      <div className="container login-container">
        <div className="row g-0">
          {/* Imagen lateral (solo visible en lg y superior) */}
          <div
            className="col-lg-6 d-none d-lg-block login-image"
            style={{ backgroundColor: '#f0f0f0' }}
          >
            {/* Aquí puedes agregar una imagen o dejar vacío */}
          </div>

          {/* Formulario */}
          <div className="col-lg-6 login-form">
            <div className="text-center mb-5">
              <i className="bi bi-shield-lock-fill logo" style={{ fontSize: '3rem' }}></i>
              <h1 className="h3 fw-bold">Iniciar Sesión</h1>
              <p className="text-muted">Ingresa tus credenciales para continuar</p>
            </div>

            <form action="/login" method="post">
              <div className="mb-4">
                <label htmlFor="username" className="form-label fw-medium">
                  Correo electrónico o Usuario
                </label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-envelope-fill"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    placeholder="correo@ejemplo.com"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <label htmlFor="password" className="form-label fw-medium">
                    Contraseña
                  </label>
                  <a href="#" className="text-decoration-none small" style={{ color: 'var(--primary-color)' }}>
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-lock-fill"></i>
                  </span>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div className="form-check mb-4">
                <input className="form-check-input" type="checkbox" id="remember" />
                <label className="form-check-label" htmlFor="remember">
                  Recordar sesión
                </label>
              </div>

              <button type="submit" className="btn btn-primary w-100 py-2 btn-login">
                Iniciar Sesión
              </button>

              <div className="additional-links mt-3 text-center">
                <p>
                  ¿No tienes cuenta? <Link to="/register" className="btn btn-outline-primary rounded-pill ms-2 px-4 py-2">
  Regístrate
</Link>



                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-4 bg-light mt-5">
        <small>© 2025 Tu Proyecto. Todos los derechos reservados.</small>
      </footer>
    </>
  );
};

export default Login;
