//IMPORTAMOS EL MODELO DE DATOS
import { modeloReserva} from "../models/modeloReserva.js";

export class ServicioReserva{

    constructor(){}

    async registrar(reserva){
        let reservaRegistrar= new modeloReserva(reserva)
        return await reservaRegistrar.save()
    }

    async buscarPorId(id){
        let reserva= await modeloReserva.findById(id)
        return reserva
    }

    async editar(id, datos){
        return await modeloReserva.findByIdAndUpdate(id, datos)
    }

    async eliminar(id){
        return await modeloReserva.findByIdAndDelete(id)
    }
}
