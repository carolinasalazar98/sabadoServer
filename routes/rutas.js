//Importa express
import express from "express";

//Importo el controlador de habitaciones
import { ControladorHabitacion } from "../Controllers/controladorHabitacion.js";
import { ControladorReserva } from "../Controllers/controladorReserva.js";
//Creouna objeto de la clase controlador habitacion
let controladorHabitacion = new ControladorHabitacion();
let controladorReserva = new ControladorReserva();

//Utilizo el metodo Router() de express
export let rutas = express.Router();

//Programo las rutas

//Lista de servivicos que ofrece mi API
rutas.get("/api/v1/sabado", controladorHabitacion.buscarTodas);
rutas.get("/api/v1/sabado/:id", controladorHabitacion.buscarPorId);
rutas.post("/api/v1/sabado", controladorHabitacion.registrar);
rutas.put("/api/v1/sabado/:id", controladorHabitacion.editar);
rutas.delete("/api/v1/sabado/:id", controladorHabitacion.eliminar);

// rutas Controlador Reserva
rutas.get("/api/v2/reserva/:id", controladorReserva.buscarPorId);
rutas.post("/api/v2/reserva", controladorReserva.registrarReserva);
rutas.put("/api/v2/reserva/:id", controladorReserva.editarReserva);
rutas.delete("/api/v2/reserva/:id", controladorReserva.eliminarReserva);


