//IMPORTO EL FRAMEWORK EXPRESS
//const express = require('express') //version vieja de umportar
import express from "express";

//importo las rutas de la API
import { rutas } from "../routes/rutas.js";
//importo la conexion a BD
import{conectarConBD} from '../database/conexion.js'

export class Servidor {

  constructor() {
    this.app = express(); //ATRIBUTO APP guarda a express
    this.conectarBD ()
    this.llamarAuxiliares(); //ACTIVAR MIDLEWARES O AYUDAS
    this.atenderPeticiones();
  }

  despertarServidor() {
    this.app.listen(process.env.PORT, function () {
      console.log(`SERVIDOR ENCENDIDO EN ${process.env.PORT}`);
    });
  }

  atenderPeticiones() {
    //LLAMANDO EL ARHIVO DE RUTAS
    //('/') cualquier ruta que llegue
    this.app.use("/", rutas);
  }

  llamarAuxiliares(){
    this.app.use(express.json()) //AYUDANDANTE PARA RECIBIR DATOS EN EL  BODY DE LA PETICIÓN
  }
  conectarBD(){
    conectarConBD()
  }
}
