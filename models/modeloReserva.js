//importar BD

import mongoose from "mongoose";

//ESQUEMA
const Schema = mongoose.Schema; //ESQUEMA DE DATOS (QUE DATOS TIENE MI MODELO)

//CREO MI PROPIO ESQUEMA DE DATOS

const Reserva = new Schema({
    idCliente:{
        type:String,
        required: true
    },
    tarjetaCredito:{
        type: String,
        required: true
    },
    fechaIng:{
        type: Date,
        required: true
    },
    fechaSalida:{
        type: Date,
        required: true
    },
    idHabitacion:{
        type: String,
        required: true
    },
    costo:{
        type:Number,
        required: true
    },
})

//SE ENVIA EL MODELO DE DATOS
export const modeloReserva= mongoose.model('Reservas', Reserva);
