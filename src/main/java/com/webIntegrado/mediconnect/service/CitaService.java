package com.webIntegrado.mediconnect.service;

import com.webIntegrado.mediconnect.model.Cita;
import com.webIntegrado.mediconnect.model.CitaConDetalles;
import com.webIntegrado.mediconnect.model.Medico;
import com.webIntegrado.mediconnect.model.Paciente;
import com.webIntegrado.mediconnect.repository.CitaRepository;
import com.webIntegrado.mediconnect.repository.MedicoRepository;
import com.webIntegrado.mediconnect.repository.PacienteRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CitaService {

    @Autowired
    private CitaRepository citaRepository;

    public String reservarCita(Long pacienteId, Long medicoId, LocalDateTime fechaHora, String motivo) {
        if (citaRepository.existsByMedicoIdAndFechaHora(medicoId, fechaHora)) {
            return "Horario no disponible";
        }

        Cita cita = new Cita();
        cita.setPacienteId(pacienteId);
        cita.setMedicoId(medicoId);
        cita.setFechaHora(fechaHora);
        cita.setMotivo(motivo);
        citaRepository.save(cita);

        return "Cita registrada con éxito";
    }





    
    public List<Cita> obtenerTodasLasCitas() {
        return citaRepository.findAll();
    }

    @Autowired
    private PacienteRepository pacienteRepository;

    @Autowired
    private MedicoRepository medicoRepository;

    public List<CitaConDetalles> obtenerCitasConDetalles() {
        List<Cita> citas = citaRepository.findAll();
        List<CitaConDetalles> citasConDetalles = new ArrayList<>();

        for (Cita cita : citas) {
            Optional<Paciente> paciente = pacienteRepository.findById(cita.getPacienteId());
            Optional<Medico> medico = medicoRepository.findById(cita.getMedicoId());

            if (paciente.isPresent() && medico.isPresent()) {
                citasConDetalles.add(new CitaConDetalles(cita, paciente.get(), medico.get()));
            }
        }

        return citasConDetalles;
    }

}
