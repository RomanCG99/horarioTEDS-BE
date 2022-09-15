const { gql } = require('apollo-server');

// schema
const typeDefs = gql`
    type Viaje {
        id: ID
        unidad: String
        lunes: Viaje
        martes: Viaje
        jueves: Viaje
        viernes: Viaje
        sabado: Viaje
        domingo: Viaje  
    }
    input ViajeInput {
        cliente: String
        destino: String 
    }
    type Unidad {
        unidad: String
        lunes: Unidad
        martes: Unidad
        jueves: Unidad
        viernes: Unidad
        sabado: Unidad
    }
    input UnidadInput {
        cliente: String
        destino: String 
    }

    type Query {
    obtenerViaje(id: ID) : Unidad
    }
    type Mutation {
        nuevoViaje(input: UnidadInput) : Unidad
        actualizarViaje( id: ID!, input : UnidadInput ) : Unidad
    }
    `;

module.exports = typeDefs;