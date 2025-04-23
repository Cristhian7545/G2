package com.webIntegrado.mediconnect.service;

import com.webIntegrado.mediconnect.model.Cita;
import com.webIntegrado.mediconnect.repository.CitaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

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
}
