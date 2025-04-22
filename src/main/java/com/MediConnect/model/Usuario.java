package com.MediConnect.model;

import jakarta.persistence.*;

@Entity
@Table(name = "usuarios")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;
    private String apellidoPaterno;
    private String apellidoMaterno;
    private String dni;
    private String sexo;

    @Column(unique = true)
    private String email;

    private String password;

    // getters y setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getNombre() { return nombre; }
    public void setNombre(String n) { this.nombre = n; }
    public String getApellidoPaterno() { return apellidoPaterno; }
    public void setApellidoPaterno(String a) { this.apellidoPaterno = a; }
    public String getApellidoMaterno() { return apellidoMaterno; }
    public void setApellidoMaterno(String a) { this.apellidoMaterno = a; }
    public String getDni() { return dni; }
    public void setDni(String d) { this.dni = d; }
    public String getSexo() { return sexo; }
    public void setSexo(String s) { this.sexo = s; }
    public String getEmail() { return email; }
    public void setEmail(String e) { this.email = e; }
    public String getPassword() { return password; }
    public void setPassword(String p) { this.password = p; }
}

