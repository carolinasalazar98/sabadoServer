//CONTROLADOR
//1. RECIBIR PETICIONES
//2. EJECUTAR LOGICA DE NEGOCIO
//3. LLAMAR A LA CAPA DE SERVICIOS
//3. ENVIAR LAS RESPUESTAS AL CLIENTE

import { request } from "express";

export class ControladorHabitacion {
  //Logica para el servicio
  constructor() {}

  buscarTodas(request, response) {
    let datos = [
      { nombre: "carolina", edad: 23 },
      { nombre: "sara", edad: 24 },
    ]; //Borrar despues

    try {
      //todo sale bien
      response.status(200).json({
        mensaje: "exito buscando los datos",
        data: datos,
        estado: true,
      });
    } catch (error) {
      response.status(400).json({
        mensaje: "Error buscando los datos" + error,
        data: [],
        estado: falso,
      });
    }
  }

  buscarPorId(request, response) {

    let datos = [{ nombre: "carolina", edad: 23 },]; //Borrar despues
    let id=request.params.id
    console.log(id)
      try {
        //todo sale bien
        response.status(200).json({
          mensaje: "exito buscando los datos " +id,
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

  registrar(request, response) {

    let datosPeticion=request.body
    try{

      response.status(200).json({
        mensaje:"EXITO AGREGANDO LA HABITACION ",
        data:datosPeticion,
        estado:true
      })
    }catch(error){

      response.status(400).json({
        mensaje:"FALLAMOS AGREGANDO LA HABITACION ",
        data:[],
        estado:false

      })
    }
      
  }

  editar(request, response) {
    let id=request.params.id
    let datosPeticion=request.body
    try{

        response.status(200).json({
        mensaje:"EXITO EDITANDO LA HABITACION ",
        data:datosPeticion,
        estado:true
        })

    }catch(error){

      response.status(400).json({
        mensaje:"ERROR EDITANDO LA HABITACION "+error,
        data:[],
        estado:false

    })
  }
}

  eliminar(request, response) {
     let id=request.params.id

     try{

      response.status(200).json({
      mensaje:"EXITO ELIMINANDO LA HABITACION ",
      data:[],
      estado:true
      })

  }catch(error){

    response.status(400).json({
      mensaje:"ERROR ELIMINANDO LA HABITACION "+error,
      data:[],
      estado:false
    })
  }
}
   
}
