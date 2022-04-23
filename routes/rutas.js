//Importa express
import express from "express";

//Importo el controlador de habitaciones
import { ControladorHabitacion } from "../Controllers/controladorHabitacion.js";
//Creouna objeto de la clase controlador habitacion
let controladorHabitacion = new ControladorHabitacion();

//Utilizo el metodo Router() de express
export let rutas = express.Router();

//Programo las rutas

//Lista de servivicos que ofrece mi API
rutas.get("/api/v1/sabado", controladorHabitacion.buscarTodas);


rutas.get("/api/v1/sabado/:id", controladorHabitacion.buscarPorId);

rutas.post("/api/v1/sabado", function (req, res) {
  res.send("Hola soy un POST");
});

rutas.put("/api/v1/sabado", function (req, res) {
  res.send("Hola soy un PUT");
});

rutas.delete("/api/v1/sabado", function (req, res) {
  res.send("Hola soy un DELETE");
});
