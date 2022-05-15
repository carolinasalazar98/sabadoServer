//Importar mongoose
import mongoose from 'mongoose';

export async function conectarConBD(){

    try{
        await mongoose.connect(process.env.DATABASE);
        console.log("exito conectandonos a la BD")
    }
    catch(error){
        console.log("UPSSS...."+error)
    }
}