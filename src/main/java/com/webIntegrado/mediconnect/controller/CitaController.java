package com.webIntegrado.mediconnect.controller;


import com.webIntegrado.mediconnect.model.CitaRequest;
import com.webIntegrado.mediconnect.model.Usuario;
import com.webIntegrado.mediconnect.repository.UsuarioRepository;
import com.webIntegrado.mediconnect.repository.PacienteRepository;
import com.webIntegrado.mediconnect.service.CitaService;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/citas")
@CrossOrigin(origins = "*")
public class CitaController {

    @Autowired
    private CitaService citaService;

    @Autowired
    private UsuarioRepository usuarioRepo;

    @Autowired
    private PacienteRepository pacienteRepo;


    @PostMapping("/reservar")
    public ResponseEntity<String> reservarCita(@RequestBody CitaRequest request, Authentication auth) {
        String email = auth.getName();
        Usuario usuario = usuarioRepo.findByEmailOrUsername(email, email).orElseThrow();

        Long pacienteId = pacienteRepo.findByUsuarioId(usuario.getId_usuario())
                .orElseThrow(() -> new RuntimeException("Paciente no encontrado")).getId_paciente();

        String mensaje = citaService.reservarCita(
                pacienteId,
                request.getMedicoId(),
                request.getSedeId(),       // <-- agregado aquí
                request.getFechaHora(),
                request.getMotivo()
        );

        return ResponseEntity.ok(mensaje);
    }


}