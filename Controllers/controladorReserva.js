//CONTROLADOR
//1. RECIBIR PETICIONES
//2. EJECUTAR LOGICA DE NEGOCIO
//3. LLAMAR A LA CAPA DE SERVICIOS
//3. ENVIAR LAS RESPUESTAS AL CLIENTE
import { request } from "express";
import { ServicioReserva } from "../services/ServicioReserva.js";

export class ControladorReserva {
  //Logica para el servicio
  constructor() {}

  
  //BUSCAR POR ID GET
  async buscarPorId(request, response) {

   let servicioReserva= new ServicioReserva()
    let id = request.params.id;
    console.log(id);
    try {
      //todo sale bien
      response.status(200).json({
        mensaje: "exito buscando los datos " + id,
        data: await servicioReserva.buscarPorId(id),
        estado: true,
      });
    } catch (error) {
      response.status(400).json({
        mensaje: "Error buscando los datos: " + error,
        data: [],
        estado: false,
      });
    }
  }

  //REGISTRAR RESERVA POST

 async registrarReserva(request, response) {

    let servicioReserva= new ServicioReserva()
    let datosPeticion = request.body;
    try {

      await servicioReserva.registrar(datosPeticion)
      response.status(200).json({
        mensaje: "EXITO AGREGANDO LA RESERVA ",
        data: null,
        estado: true,
      });
    } catch (error) {
      response.status(400).json({
        mensaje: "FALLAMOS REGISTRANDO LA RESERVA "+ error,
        data: [],
        estado: false,
      });
    }
  }


  //EDITAR RESERVA PUT
  async editarReserva(request, response) {

    let servicioReserva= new ServicioReserva()
    let id = request.params.id;
    let datosPeticion = request.body;
    try {

      await  servicioReserva.editar(id, datosPeticion)
      response.status(200).json({
        mensaje: "EXITO EDITANDO SU RESERVA ",
        data: null,
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
  async eliminarReserva(request, response) {

    let servicioReserva= new ServicioReserva()
    let id = request.params.id;
    try {

      await servicioReserva.eliminar(id)
      response.status(200).json({
        mensaje: "EXITO ELIMINANDO LA HABITACION RESERVADA ",
        data: null,
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
