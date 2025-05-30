import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const DoctorCard = ({ doctor }) => {
  return (
    <div className="card m-3 shadow" style={{ width: '18rem' }}>
      <img src={doctor.foto} className="card-img-top" alt={`Foto de ${doctor.nombre}`} />
      <div className="card-body">
        <h5 className="card-title">{doctor.nombre}</h5>
        <p className="card-text">
          <strong>Especialidad:</strong> {doctor.especialidad}<br />
          <strong>Teléfono:</strong> {doctor.telefono}
        </p>
        <a href="" className="btn btn-primary">
          <i className="bi bi-info-circle-fill"></i> Ver más
        </a>
      </div>
    </div>
  );
};

export default DoctorCard;
