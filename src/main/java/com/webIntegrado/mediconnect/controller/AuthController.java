package com.webIntegrado.mediconnect.controller;

import com.webIntegrado.mediconnect.model.RegistroForm;
import com.webIntegrado.mediconnect.service.UsuarioService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@Controller
public class AuthController {

    @Autowired
    private UsuarioService usuarioService;

    // Página de inicio post-login
    @GetMapping({"/", "/home"})
    public String mostrarHome() {
        return "home"; // templates/home.html
    }

    // Mostrar formulario de login
    @GetMapping("/login")
    public String mostrarLogin(
            @RequestParam(value = "error", required = false) String error,
            @RequestParam(value = "logout", required = false) String logout,
            @RequestParam(value = "registrado", required = false) String registrado,
            Model model
    ) {
        if (error != null) {
            model.addAttribute("errorMsg", "Credenciales incorrectas");
        }
        if (logout != null) {
            model.addAttribute("msg", "Sesión cerrada correctamente");
        }
        if (registrado != null) {
            model.addAttribute("msg", "Registro exitoso, ya puedes iniciar sesión");
        }
        return "login"; // templates/login.html
    }

    // Mostrar formulario de registro
    @GetMapping("/register")
    public String mostrarRegistro(Model model) {
        model.addAttribute("registroForm", new RegistroForm());
        return "register"; // templates/register.html
    }

    // Procesar el registro
    @PostMapping("/register")
    public String procesarRegistro(
            @Valid @ModelAttribute("registroForm") RegistroForm form,
            BindingResult bindingResult
    ) {
        if (bindingResult.hasErrors()) {
            return "register";
        }

        try {
            usuarioService.register(form);
        } catch (RuntimeException e) {
            bindingResult.rejectValue("email", "email.duplicado", e.getMessage());
            return "register";
        }

        return "redirect:/login?registrado";
    }
}
