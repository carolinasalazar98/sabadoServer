//CONTROLADOR
//1. RECIBIR PETICIONES
//2. EJECUTAR LOGICA DE NEGOCIO
//3. LLAMAR A LA CAPA DE SERVICIOS
//3. ENVIAR LAS RESPUESTAS AL CLIENTE
import { ServicioHabitacion } from "../services/ServicioHabitacion.js";

export class ControladorHabitacion {
  //Logica para el servicio
  constructor() {}

  async buscarTodas(request, response) {

    let servicioHabitacion= new ServicioHabitacion()

    try {
      //todo sale bien
      response.status(200).json({
        mensaje: "exito buscando los datos",
        data: await servicioHabitacion.buscarTodas(),
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

  async buscarPorId(request, response) {

    let servicioHabitacion= new ServicioHabitacion()
    let id=request.params.id
    console.log(id)
      try {
        //todo sale bien
        response.status(200).json({
          mensaje: "exito buscando los datos " +id,
          data: await servicioHabitacion.buscarPorId(id),
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

  async registrar(request, response) {

    let servicioHabitacion= new ServicioHabitacion()
    let datosPeticion=request.body
    try{

      await servicioHabitacion.registrar(datosPeticion)
      response.status(200).json({
        mensaje:"EXITO AGREGANDO LA HABITACION ",
        data: null,
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

   async editar(request, response) {

    let servicioHabitacion= new ServicioHabitacion()
    let id=request.params.id
    let datosPeticion=request.body
    try{
        await  servicioHabitacion.editar(id, datosPeticion)
        response.status(200).json({
        mensaje:"EXITO EDITANDO LA HABITACION ",
        data:null,
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

  async eliminar(request, response) {

    let servicioHabitacion= new ServicioHabitacion()
     let id=request.params.id

     try{
      await servicioHabitacion.eliminar(id)
      response.status(200).json({
      mensaje:"EXITO ELIMINANDO LA HABITACION ",
      data:null,
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
