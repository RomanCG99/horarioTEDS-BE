require('dotenv').config({ path: 'variables.env' });
const Usuario = require('../models/Usuario')

// resolvers 
const resolvers = {
    Query: {
        obtenerViaje: async () => {

            try {
                const Viaje = await Usuario.find({});
                return Viaje;
            } catch (error) {
                console.log(error);
            }

        }
    },
    Mutation: {
        nuevoUnidad: async (_, { input }) => {
            try {
                const Viaje = new Usuario(input);
                // almacenar en la base de datos 
                const resultado = await Viaje.save();
                return resultado;
            } catch (error) {
                console.log(error);

            }
        },
        actualizarViaje: async (_, { id, input }) => {
            // revisar si el producto existe o no
            let Viaje = await Usuario.findById(id);

            //guardarlo en la base de datos
            Viaje = await Usuario.findOneAndUpdate({ _id: id }, input, { new: true });

            return Viaje;
        }
    }
}

module.exports = resolvers;