package com.webIntegrado.mediconnect.controller;

import com.webIntegrado.mediconnect.model.Medico;
import com.webIntegrado.mediconnect.repository.MedicoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/medicos")
@CrossOrigin(origins = "*") // permite peticiones desde cualquier origen (útil para el frontend)
public class MedicoController {

    @Autowired
    private MedicoRepository medicoRepository;

    // Obtener todas las especialidades únicas
    @GetMapping("/especialidades")
    public List<String> obtenerEspecialidades() {
        return medicoRepository.findDistinctEspecialidades();
    }

    // Obtener médicos por especialidad
    @GetMapping("/por-especialidad")
    public List<Medico> obtenerMedicosPorEspecialidad(@RequestParam String especialidad) {
        return medicoRepository.findByEspecialidad(especialidad);
    }

    // Obtener todos los médicos (opcional)
    @GetMapping
    public List<Medico> obtenerTodos() {
        return medicoRepository.findAll();
    }
}
