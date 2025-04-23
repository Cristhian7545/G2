package com.webIntegrado.mediconnect.service;

import com.webIntegrado.mediconnect.model.RegistroForm;
import com.webIntegrado.mediconnect.model.Paciente;
import com.webIntegrado.mediconnect.model.Usuario;
import com.webIntegrado.mediconnect.repository.PacienteRepository;
import com.webIntegrado.mediconnect.repository.UsuarioRepository;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.Optional;

@Service
public class UsuarioService implements org.springframework.security.core.userdetails.UserDetailsService {

    private final UsuarioRepository usuarioRepo;
    private final PacienteRepository pacienteRepo;
    private final PasswordEncoder encoder;

    public UsuarioService(UsuarioRepository usuarioRepo, PacienteRepository pacienteRepo, PasswordEncoder encoder) {
        this.usuarioRepo = usuarioRepo;
        this.pacienteRepo = pacienteRepo;
        this.encoder = encoder;
    }

    @Override
    public UserDetails loadUserByUsername(String login) throws UsernameNotFoundException {
        Usuario u = usuarioRepo.findByUsername(login)
                .or(() -> usuarioRepo.findByEmail(login))
                .orElseThrow(() -> new UsernameNotFoundException("Usuario no encontrado"));
        return User.builder()
                .username(u.getUsername())
                .password(u.getPasswordHash())
                .roles("USER")
                .build();
    }

    public Usuario register(RegistroForm form) {
        if (usuarioRepo.findByEmail(form.getEmail()).isPresent()) {
            throw new RuntimeException("Este correo ya está registrado");
        }

        Usuario user = new Usuario();
        user.setUsername(form.getUsername());
        user.setEmail(form.getEmail());
        user.setPasswordHash(encoder.encode(form.getPassword()));
        user.setRolId(3); // PACIENTE
        user.setActivo(true);
        user.setFechaCreacion(new Date());

        Usuario guardado = usuarioRepo.save(user);

        Paciente p = new Paciente();
        p.setUsuarioId(guardado.getId_usuario());
        p.setNombres(form.getNombres());
        p.setApellidos(form.getApellidos());
        p.setTelefono(form.getTelefono());
        p.setDireccion(form.getDireccion());

        pacienteRepo.save(p);

        return guardado;
    }
}
