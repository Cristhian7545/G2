package com.MediConnect.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class LoginController {

    @GetMapping("/login")
    public String showLoginPage(
            @RequestParam(value="error", required=false) String error,
            @RequestParam(value="logout", required=false) String logout,
            @RequestParam(value="registrado", required=false) String registrado,
            Model model
    ) {
        if (error != null) {
            model.addAttribute("errorMsg", "Usuario o contraseña inválidos");
        }
        if (logout != null) {
            model.addAttribute("msg", "Has cerrado sesión correctamente");
        }
        if (registrado != null) {
            model.addAttribute("msg", "Registro exitoso, por favor ingresa");
        }
        return "login";
    }
}
