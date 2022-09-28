
const {
    obtenerViaje,
    nuevoUnidad,
    actualizarViaje,
    obtenerClave
}=require('../controllers/Viajes')

const resolvers = {
    Query:{
        obtenerViaje: () => obtenerViaje()
    },
    Mutation:{
        nuevoUnidad: (_, { input }) => nuevoUnidad(input),
        actualizarViaje: (_, { id,input }) => actualizarViaje(id,input),
        obtenerClave: (_, {input}) => obtenerClave(input)
    },
}
module.exports = resolvers;
