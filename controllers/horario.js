require('dotenv').config({ path: 'variables.env' })
const Viajes = require('../models/Viajes');


///////////////// CREATE /////////////////
exports.nuevoUnidad = async (input) => {
    try {
        const viaje = new Viajes(input);

        //Almacenar en la BD
        const resultado = await viaje.save();
        return resultado;

    } catch (error) {
        console.log('Hubo un error');
        console.log(error);
    }
}


///////////////// GET /////////////////
exports.obtenerUnidades = async () => {
    try {
        const unidades = await Viajes.find({});
        return unidades;
    } catch (error) {
        console.log(error);
    }
}

exports.obtenerClave = async (input) =>{
    const {clave} = input;
    try {
        if (clave == process.env.Access_Key) {
            return process.env.Access_Key
        } else {
            throw new Error('La Claves es incorrecta')
        }
    } catch (error) {
        console.log(error)
    }
}


exports.actualizarUnidad = async (id, input) => {
    // revisar si el producto existe o no
    let Viaje = await Viajes.findById(id);

    if(!Viaje){
        throw new Error('Cliente not found');
    }

    //guardarlo en la base de datos
    Viaje = await Viajes.findOneAndUpdate({ _id: id }, input, { new: true });
    return Viaje;
}