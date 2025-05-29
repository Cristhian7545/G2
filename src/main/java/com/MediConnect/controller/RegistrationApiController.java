package com.MediConnect.controller;

import com.MediConnect.model.RegistroForm;
import com.MediConnect.model.Usuario;
import com.MediConnect.repository.UsuarioRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api")
public class RegistrationApiController {

    private final UsuarioRepository repo;
    private final PasswordEncoder encoder;

    public RegistrationApiController(UsuarioRepository repo,
                                     PasswordEncoder encoder) {
        this.repo = repo;
        this.encoder = encoder;
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegistroForm form) {
        Usuario u = new Usuario();
        u.setNombre(form.getNombre());
        u.setApellidoPaterno(form.getApellidoPaterno());
        u.setApellidoMaterno(form.getApellidoMaterno());
        u.setDni(form.getDni());
        u.setSexo(form.getSexo());
        u.setEmail(form.getEmail());
        u.setPassword(encoder.encode(form.getPassword()));
        repo.save(u);
        return ResponseEntity.ok(Map.of("success", true));
    }
}


