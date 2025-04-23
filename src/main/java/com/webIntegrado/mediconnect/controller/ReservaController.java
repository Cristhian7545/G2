package com.webIntegrado.mediconnect.controller;

import com.webIntegrado.mediconnect.model.CitaRequest;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ReservaController {

    @GetMapping("/reserva")
    public String mostrarFormularioReserva(Model model) {
        model.addAttribute("citaRequest", new CitaRequest());
        return "reserva"; // Thymeleaf busca en templates/reserva.html
    }
}
