//CONTROLADOR
//1. RECIBIR PETICIONES
//2. EJECUTAR LOGICA DE NEGOCIO
//3. LLAMAR A LA CAPA DE SERVICIOS
//3. ENVIAR LAS RESPUESTAS AL CLIENTE
//UN CONTROLADOR PUEDE LLAMAR A LOS SERVICIOS QUE QUIERA

import { ServicioReserva } from "../services/ServicioReserva.js";
import { ServicioHabitacion } from "../services/ServicioHabitacion";

export class ControladorReserva {
  //Logica para el servicio
  constructor() {}

 
  async buscarPorId(request, response) {

    let servicioReserva= new ServicioReserva()
    let id=request.params.id
    console.log(id)
      try {
        //todo sale bien
        response.status(200).json({
          mensaje: "exito buscando los datossssssss " +id,
          data: await servicioReserva.buscarPorId(id),
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

    let servicioReserva= new ServicioReserva()
    let servicioHabitacion= new ServicioHabitacion()

    let datosPeticion=request.body //DATOS DE LA RESERVA(OBJETO)

    try{

        //CONSULTAR CUANTO VALE POR NOCHE 1 HABITACION.
        let habitacionConsultar = await servicioHabitacion.buscarPorId(datosPeticion.idHabitacion)
        let precioNoche=habitacionConsultada.precio

        //FECHA SALIDA
        let fechaSalida= datosPeticion.fechaOut
        //FECHA ENTRADA
        let fechaEntrada= datosPeticion.fechaIng
        //RESTAR LAS FECHAS (ENTRADAS-SALIDA)
        let diasTotales= fechaEntrada-fechaSalida

        //COSTO TOTAL DE LA RESERVA
        let costo=diasTotales*precioNoche
        datosPeticion.costo=costo

      await servicioReserva.registrar(datosPeticion)
      response.status(200).json({
        mensaje:"EXITO AGREGANDO LA RESERVA ",
        data: null,
        estado:true
      })
    }catch(error){

      response.status(400).json({
        mensaje:"FALLAMOS AGREGANDO LA RESERVA ",
        data:[],
        estado:false

      })
    }
      
  }

   async editar(request, response) {

    let servicioReserva= new ServicioReserva()
    let id=request.params.id
    let datosPeticion=request.body
    try{
        await  servicioReserva.editar(id, datosPeticion)
        response.status(200).json({
        mensaje:"EXITO EDITANDO LA RESERVA ",
        data:null,
        estado:true
        })

    }catch(error){

      response.status(400).json({
        mensaje:"ERROR EDITANDO LA RESERVA "+error,
        data:[],
        estado:false

    })
  }
}

  async eliminar(request, response) {

    let servicioReserva= new ServicioReserva()
     let id=request.params.id
     try{
     await servicioReserva.eliminar(id)
      response.status(200).json({
      mensaje:"EXITO ELIMINANDO LA RESERVA ",
      data:null,
      estado:true
      })

  }catch(error){
    response.status(400).json({
      mensaje:"ERROR ELIMINANDO LA RESERVA "+error,
      data:[],
      estado:false
    })
  }
}
   
}
