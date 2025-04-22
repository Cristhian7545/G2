package com.MediConnect.controller;

import jakarta.validation.Valid;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.MediConnect.model.RegistroForm;
import com.MediConnect.service.UsuarioService;

@Controller
public class RegistrationController {

    private final UsuarioService usuarioService;

    public RegistrationController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    @GetMapping("/register")
    public String showRegistrationForm(Model model) {
        model.addAttribute("registroForm", new RegistroForm());
        return "register";
    }

    @PostMapping("/register")
    public String processRegistration(
            @Valid @ModelAttribute("registroForm") RegistroForm form,
            BindingResult bindingResult
    ) {
        // 1) validaciones de campo
        if (bindingResult.hasErrors()) {
            return "register";
        }

        // 2) comprobar email duplicado y guardar
        try {
            usuarioService.register(form);
        } catch (RuntimeException ex) {
            bindingResult.rejectValue("email", "email.taken", ex.getMessage());
            return "register";
        }

        // 3) si todo OK, redirige al login con parámetro de éxito
        return "redirect:/login?registrado";
    }

}
