require('dotenv').config({ path: 'variables.env' });


// resolvers 
const resolvers = {
    Query: {
        obtenerViaje: async (_, { id }) => {

            // revisar si el viaje existe o no
            const viaje = await Viaje.findById(id);
            return viaje;
            }
        },
    Mutation: {
        nuevoViaje: async (_, { input }) => {
            try {
                const viaje = new Viaje(input);
                // almacenar en la base de datos 
                const resultado = await viaje.save();
                return resultado;
            } catch (error) {
                console.log(error);

            }
        },
        actualizarViaje: async (_, { id, input }) => {
            // revisar si el producto existe o no
            let viaje = await Viaje.findById(id);

            //guardarlo en la base de datos
            viaje = await Viaje.findOneAndUpdate({ _id: id }, input, { new: true });

            return viaje;
        }
    }
}

module.exports = resolvers;