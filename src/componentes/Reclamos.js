import React, { useState, useEffect } from "react";

// Simulamos llamada a base de datos que trae clínicas
const fetchClinicas = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: "CL-001", nombre: "Clínica Miraflores" },
        { id: "CL-002", nombre: "Clínica San Isidro" },
        { id: "CL-003", nombre: "Clínica Surco" },
        { id: "CL-004", nombre: "Clínica Bellavista" },
        { id: "CL-005", nombre: "Clínica La Punta" },
      ]);
    }, 500); // simulamos retardo
  });

export default function LibroReclamacionesClinicas() {
  const [form, setForm] = useState({
    clinica: "",
    nombrePersona: "",
    tipoReclamo: "",
    clasificacion: "",
    detalle: "",
  });

  const [clinicas, setClinicas] = useState([]);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    fetchClinicas().then((data) => setClinicas(data));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.clinica) newErrors.clinica = "Seleccione una clínica";
    if (!form.nombrePersona) newErrors.nombrePersona = "Ingrese el nombre de la persona";
    if (!form.tipoReclamo) newErrors.tipoReclamo = "Seleccione tipo de reclamo";
    if (!form.clasificacion) newErrors.clasificacion = "Seleccione clasificación";
    if (!form.detalle) newErrors.detalle = "Ingrese detalle del reclamo";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    console.log("Datos a enviar:", form);

    alert("Reclamo enviado correctamente");

    setForm({
      clinica: "",
      nombrePersona: "",
      tipoReclamo: "",
      clasificacion: "",
      detalle: "",
    });
    setErrors({});
  };

  return (
    <div style={{ maxWidth: 600, margin: "2rem auto", padding: "1rem", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>Libro de Reclamaciones - Red de Clínicas</h2>
      <form onSubmit={handleSubmit} noValidate>
        {/* Clínica */}
        <label>
          Clínica <span style={{ color: "red" }}>*</span>
          <select
            name="clinica"
            value={form.clinica}
            onChange={handleChange}
            style={{ width: "100%", padding: "0.5rem", marginTop: 4 }}
          >
            <option value="">Seleccione una clínica</option>
            {clinicas.map((c) => (
              <option key={c.id} value={c.id}>
                {c.nombre} ({c.id})
              </option>
            ))}
          </select>
          {errors.clinica && <div style={{ color: "red", fontSize: 12 }}>{errors.clinica}</div>}
        </label>

        {/* Nombre de la persona que causó molestia */}
        <label style={{ marginTop: "1rem", display: "block" }}>
          Nombre de la persona que causó la molestia <span style={{ color: "red" }}>*</span>
          <input
            type="text"
            name="nombrePersona"
            value={form.nombrePersona}
            onChange={handleChange}
            placeholder="Ingrese nombre completo"
            style={{ width: "100%", padding: "0.5rem", marginTop: 4 }}
          />
          {errors.nombrePersona && (
            <div style={{ color: "red", fontSize: 12 }}>{errors.nombrePersona}</div>
          )}
        </label>

        {/* Tipo de reclamo */}
        <label style={{ marginTop: "1rem", display: "block" }}>
          Tipo de reclamo <span style={{ color: "red" }}>*</span>
          <select
            name="tipoReclamo"
            value={form.tipoReclamo}
            onChange={handleChange}
            style={{ width: "100%", padding: "0.5rem", marginTop: 4 }}
          >
            <option value="">Elija una opción</option>
            <option value="Reclamo">Reclamo</option>
            <option value="Queja">Queja</option>
          </select>
          {errors.tipoReclamo && (
            <div style={{ color: "red", fontSize: 12 }}>{errors.tipoReclamo}</div>
          )}
        </label>

        {/* Clasificación */}
        <label style={{ marginTop: "1rem", display: "block" }}>
          Clasificación del bien contratado <span style={{ color: "red" }}>*</span>
          <select
            name="clasificacion"
            value={form.clasificacion}
            onChange={handleChange}
            style={{ width: "100%", padding: "0.5rem", marginTop: 4 }}
          >
            <option value="">Seleccione una opción</option>
            <option value="Producto">Producto</option>
            <option value="Servicio no relacionado a telecomunicaciones">
              Servicio no relacionado a telecomunicaciones
            </option>
            <option value="Servicio médico">Servicio médico</option>
          </select>
          {errors.clasificacion && (
            <div style={{ color: "red", fontSize: 12 }}>{errors.clasificacion}</div>
          )}
        </label>

        {/* Detalle */}
        <label style={{ marginTop: "1rem", display: "block" }}>
          Detalle del reclamo <span style={{ color: "red" }}>*</span>
          <textarea
            name="detalle"
            value={form.detalle}
            onChange={handleChange}
            maxLength={5000}
            rows={5}
            placeholder="Describa detalladamente su reclamo (máximo 5000 caracteres)"
            style={{ width: "100%", padding: "0.5rem", marginTop: 4 }}
            required
          />
          {errors.detalle && (
            <div style={{ color: "red", fontSize: 12 }}>{errors.detalle}</div>
          )}
        </label>

        <button
          type="submit"
          style={{
            marginTop: "1.5rem",
            width: "100%",
            padding: "0.75rem",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            cursor: "pointer",
            fontSize: "1rem",
          }}
        >
          Continuar
        </button>
      </form>
    </div>
  );
}
