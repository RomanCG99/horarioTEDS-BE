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
        servicio: Boolean
    }
    input UnidadInput {
unidad: String 
servicio: Boolean
lunes: ViajeInput
martes: ViajeInput
miercoles: ViajeInput
jueves: ViajeInput
viernes: ViajeInput
sabado: ViajeInput
domingo: ViajeInput
    }
    input ClaveInput {
        clave: String
    }

    type Query {
    obtenerViaje: [Unidad]
    }
    type Mutation {
        nuevoUnidad(input: UnidadInput) : Unidad
        actualizarViaje( id: ID!, input : UnidadInput ) : Unidad
        obtenerClave(input: ClaveInput ) : String 
    }
    `;

module.exports = typeDefs;