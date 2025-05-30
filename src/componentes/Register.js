import React, { useState } from 'react';


import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/assets/register.css';


function Register() {
  const [form, setForm] = useState({
    nombres: '',
    apellidos: '',
    username: '',
    email: '',
    password: '',
    telefono: '',
    direccion: '',
    termsAccepted: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.termsAccepted) {
      alert("Debes aceptar los términos y condiciones.");
      return;
    }

    console.log("Datos enviados:", form);
  };

  return (
    <div className="container register-container">
      <div className="row g-0">
        <div className="col-lg-6 register-form">
          <div className="text-center mb-5">
            <i className="bi bi-person-plus-fill logo"></i>
            <h1 className="h3 fw-bold">Crear Cuenta</h1>
            <p className="text-muted">Completa tus datos para registrarte</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label fw-medium">Nombres</label>
                <div className="input-group">
                  <span className="input-group-text"><i className="bi bi-person-vcard"></i></span>
                  <input type="text" name="nombres" className="form-control" value={form.nombres} onChange={handleChange} required />
                </div>
              </div>

              <div className="col-md-6">
                <label className="form-label fw-medium">Apellidos</label>
                <div className="input-group">
                  <span className="input-group-text"><i className="bi bi-person-vcard"></i></span>
                  <input type="text" name="apellidos" className="form-control" value={form.apellidos} onChange={handleChange} required />
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label fw-medium">Nombre de Usuario</label>
              <div className="input-group">
                <span className="input-group-text"><i className="bi bi-person-badge"></i></span>
                <input type="text" name="username" className="form-control" value={form.username} onChange={handleChange} required />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label fw-medium">Correo Electrónico</label>
              <div className="input-group">
                <span className="input-group-text"><i className="bi bi-envelope-at"></i></span>
                <input type="email" name="email" className="form-control" value={form.email} onChange={handleChange} required />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label fw-medium">Contraseña</label>
              <div className="input-group">
                <span className="input-group-text"><i className="bi bi-lock"></i></span>
                <input type="password" name="password" className="form-control" value={form.password} onChange={handleChange} required />
              </div>
              <div className="form-text">Mínimo 8 caracteres con números y símbolos</div>
            </div>

            <div className="mb-3">
              <label className="form-label fw-medium">Teléfono</label>
              <div className="input-group">
                <span className="input-group-text"><i className="bi bi-telephone"></i></span>
                <input type="tel" name="telefono" className="form-control" value={form.telefono} onChange={handleChange} required />
              </div>
            </div>

            <div className="mb-4">
              <label className="form-label fw-medium">Dirección</label>
              <div className="input-group">
                <span className="input-group-text"><i className="bi bi-geo-alt"></i></span>
                <textarea name="direccion" rows="2" className="form-control" value={form.direccion} onChange={handleChange} required></textarea>
              </div>
            </div>

            <div className="form-check mb-4">
              <input className="form-check-input" type="checkbox" id="terms" name="termsAccepted" checked={form.termsAccepted} onChange={handleChange} />
              <label className="form-check-label" htmlFor="terms">
                Acepto los <a href="#" className="text-decoration-none">Términos y Condiciones</a>
              </label>
            </div>

            <button type="submit" className="btn btn-primary w-100 py-2">Registrar Cuenta</button>
            <div className="additional-links mt-3">
              ¿Ya tienes una cuenta? <Link to="/login" className="text-decoration-none">Inicia Sesión</Link>
            </div>
          </form>
        </div>

        <div className="col-lg-6 d-none d-lg-block register-image">
          {/* Imagen de fondo en CSS */}
        </div>
      </div>
    </div>
  );
}

export default Register;
