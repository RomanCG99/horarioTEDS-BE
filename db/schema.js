const { gql } = require('apollo-server');

// schema
const typeDefs = gql`
    type viaje  {
    cliente: String
    destino: String
    }
    input ViajeInput {
        cliente: String
        destino: String 
    }
    type Unidad {
        id: ID
        unidad: String
        lunes: viaje
        martes: viaje
        miercoles: viaje
        jueves: viaje
        viernes: viaje
        sabado: viaje 
        domingo: viaje 
    }
    input UnidadInput {
unidad: String 
lunes: ViajeInput
martes: ViajeInput
miercoles: ViajeInput
jueves: ViajeInput
viernes: ViajeInput
sabado: ViajeInput
domingo: ViajeInput
    }

    type Query {
    obtenerViaje(id: ID) : [Unidad]
    }
    type Mutation {
        nuevoUnidad(input: UnidadInput) : Unidad
        actualizarViaje( id: ID!, input : UnidadInput ) : Unidad
    }
    `;

module.exports = typeDefs;