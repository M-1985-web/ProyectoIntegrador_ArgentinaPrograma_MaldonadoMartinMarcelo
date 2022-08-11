package com.apportfolio.mmm.Security.Entity;

import com.apportfolio.mmm.Security.Enums.RolNombre;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
public class Rol {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;

  @NotNull
  @Enumerated(EnumType.STRING)
  private RolNombre rolNombre;

  //construc

  public Rol() {
  }

  //no seleccionar id en construc genera problemas
  public Rol(RolNombre rolNombre) {
    this.rolNombre = rolNombre;
  }

  //getters and setters


  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public RolNombre getRolNombre() {
    return rolNombre;
  }

  public void setRolNombre(RolNombre rolNombre) {
    this.rolNombre = rolNombre;
  }


}
