//CONTROLLERS 
const{
    obtenerUnidades,
    nuevoUnidad,
    actualizarUnidad,
    obtenerClave
} = require('../controllers/horario');

// resolvers 
const resolvers = {
    //QUERIES
    Query: {
       //UNIDAD
       obtenerUnidades : () => obtenerUnidades(),
    },
    //MUTATIONS
    Mutation:{
       //UNIDAD
       nuevoUnidad : (_, {input}) => nuevoUnidad(input),
       actualizarUnidad : (_, {id, input}) => actualizarUnidad(id, input),

       obtenerClave : (_,{input}) => obtenerClave(input)
    }
}

module.exports = resolvers;