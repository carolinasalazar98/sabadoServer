//CONTROLADOR
//1. RECIBIR PETICIONES
//2. EJECUTAR LOGICA DE NEGOCIO
//3. LLAMAR A LA CAPA DE SERVICIOS
//3. ENVIAR LAS RESPUESTAS AL CLIENTE

import { request } from "express";

export class ControladorReserva {
  //Logica para el servicio
  constructor() {}

  
  //BUSCAR POR ID GET
  buscarPorId(request, response) {
    let datos = [
      {
        nom_cliente: "carolina Salazar",
        fecha_ing: "mayo 01-2022",
        fecha_salida: "mayo 20-2022",
        num_personas: 3,
      },
    ]; //Borrar despues
    let id = request.params.id;
    console.log(id);
    try {
      //todo sale bien
      response.status(200).json({
        mensaje: "exito buscando los datos " + id,
        data: datos,
        estado: true,
      });
    } catch (error) {
      response.status(400).json({
        mensaje: "Error buscando los datos: " + error,
        data: [],
        estado: falso,
      });
    }
  }

  //REGISTRAR RESERVA POST

  registrarReserva(request, response) {
    let datosPeticion = request.body;
    try {
      response.status(200).json({
        mensaje: "EXITO AGREGANDO LA RESERVA ",
        data: datosPeticion,
        estado: true,
      });
    } catch (error) {
      response.status(400).json({
        mensaje: "FALLAMOS REGISTRANDO LA RESERVA ",
        data: [],
        estado: false,
      });
    }
  }


  //EDITAR RESERVA PUT
  editarReserva(request, response) {
    let id = request.params.id;
    let datosPeticion = request.body;
    try {
      response.status(200).json({
        mensaje: "EXITO EDITANDO SU RESERVA ",
        data: datosPeticion,
        estado: true,
      });
    } catch (error) {
      response.status(400).json({
        mensaje: "ERROR EDITANDO SU RESERVA " + error,
        data: [],
        estado: false,
      });
    }
  }


  //ELIMINANDO RESERVA DELTE
  eliminarReserva(request, response) {
    let id = request.params.id;
    try {
      response.status(200).json({
        mensaje: "EXITO ELIMINANDO LA HABITACION RESERVADA ",
        data: [],
        estado: true,
      });
    } catch (error) {
      response.status(400).json({
        mensaje: "ERROR ELIMINANDO LA RESERVA " + error,
        data: [],
        estado: false,
      });
    }
  }
}
