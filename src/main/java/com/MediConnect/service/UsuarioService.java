package com.MediConnect.service;

import java.util.Optional;

import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.MediConnect.model.RegistroForm;
import com.MediConnect.model.Usuario;
import com.MediConnect.repository.UsuarioRepository;

@Service
public class UsuarioService implements UserDetailsService {

    private final UsuarioRepository repo;
    private final PasswordEncoder encoder;

    public UsuarioService(UsuarioRepository repo, PasswordEncoder encoder) {
        this.repo = repo;
        this.encoder = encoder;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Usuario u = repo.findByEmail(email)
            .orElseThrow(() -> new UsernameNotFoundException("Usuario no encontrado"));
        return User.builder()
                   .username(u.getEmail())
                   .password(u.getPassword())
                   .roles("USER")
                   .build();
    }

    public Usuario register(RegistroForm form) {
        Optional<Usuario> existe = repo.findByEmail(form.getEmail());
        if (existe.isPresent()) {
            throw new RuntimeException("Este correo ya está registrado");
        }
        Usuario nuevo = new Usuario();
        nuevo.setNombre(form.getNombre());
        nuevo.setApellidoPaterno(form.getApellidoPaterno());
        nuevo.setApellidoMaterno(form.getApellidoMaterno());
        nuevo.setDni(form.getDni());
        nuevo.setSexo(form.getSexo());
        nuevo.setEmail(form.getEmail());
        nuevo.setPassword(encoder.encode(form.getPassword()));
        return repo.save(nuevo);
    }
}
