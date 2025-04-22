package com.MediConnect.model;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class RegistroForm {

    @NotBlank(message = "Nombre es obligatorio")
    private String nombre;

    @NotBlank(message = "Apellido paterno es obligatorio")
    private String apellidoPaterno;

    @NotBlank(message = "Apellido materno es obligatorio")
    private String apellidoMaterno;

    @NotBlank(message = "DNI es obligatorio")
    private String dni;

    @NotBlank(message = "Sexo es obligatorio")
    private String sexo;

    @Email(message = "Correo inválido")
    @NotBlank(message = "Email es obligatorio")
    private String email;

    @Size(min = 6, message = "La contraseña debe tener al menos 6 caracteres")
    private String password;

    // Getters y setters
    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }
    public String getApellidoPaterno() { return apellidoPaterno; }
    public void setApellidoPaterno(String a) { this.apellidoPaterno = a; }
    public String getApellidoMaterno() { return apellidoMaterno; }
    public void setApellidoMaterno(String a) { this.apellidoMaterno = a; }
    public String getDni() { return dni; }
    public void setDni(String dni) { this.dni = dni; }
    public String getSexo() { return sexo; }
    public void setSexo(String sexo) { this.sexo = sexo; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getPassword() { return password; }
    public void setPassword(String pwd) { this.password = pwd; }
}

