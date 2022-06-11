//importar BD

import mongoose from "mongoose";

//ESQUEMA
const Schema = mongoose.Schema; //ESQUEMA DE DATOS (QUE DATOS TIENE MI MODELO)

//CREO MI PROPIO ESQUEMA DE DATOS

const Reserva = new Schema({

    idHabitacion:{
        type: String,
        required: true
    },
    
    nombre:{
        type: String,
        required: true
    },
    apellido:{
        type: String,
        required: true
    },
    fechaIng:{
        type: Date,
        required: true
    },
    fechaOut:{
        type: Date,
        required: true
    },
    telefono:{
        type: String,
        required: true
    },
    num_personas:{
        type: Number,
        required: true
    },
    costo:{
        type:Number,
        required:false
    },
})


//SE ENVIA EL MODELO DE DATOS
export const modeloReserva= mongoose.model('Reservas', Reserva);
