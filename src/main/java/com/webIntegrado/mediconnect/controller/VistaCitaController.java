package com.webIntegrado.mediconnect.controller;

import com.webIntegrado.mediconnect.model.CitaConDetalles;
import com.webIntegrado.mediconnect.service.CitaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import java.util.List;

@Controller
public class VistaCitaController {

    @Autowired
    private CitaService citaService;

    @GetMapping("/citas")
    public String verCitas(Model model) {
        List<CitaConDetalles> citas = citaService.obtenerCitasConDetalles();
        model.addAttribute("citas", citas);
        return "citas"; 
    }

}
