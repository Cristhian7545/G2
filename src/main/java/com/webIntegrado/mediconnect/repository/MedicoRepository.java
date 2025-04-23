package com.webIntegrado.mediconnect.repository;

import com.webIntegrado.mediconnect.model.Medico;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MedicoRepository extends JpaRepository<Medico, Long> {

    // Buscar todos los médicos de una especialidad
    List<Medico> findByEspecialidad(String especialidad);

    // Obtener lista única de especialidades disponibles
    @Query("SELECT DISTINCT m.especialidad FROM Medico m")
    List<String> findDistinctEspecialidades();
}
