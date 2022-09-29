const { gql } = require('apollo-server');


// schema
const typeDefs = gql`
    type Viaje{
        nombre: String
        destino: String
    }

    type Unidad{
        id: ID
        unidad: String
        lunes: Viaje
        martes: Viaje
        miercoles: Viaje
        jueves: Viaje
        viernes: Viaje
        sabado: Viaje
        domingo: Viaje
        servicio: Boolean
    }

    input UnidadInput{
        unidad: String
        lunes: ViajeInput
        martes: ViajeInput
        miercoles: ViajeInput
        jueves: ViajeInput
        viernes: ViajeInput
        sabado: ViajeInput
        domingo: ViajeInput
        servicio: Boolean
    }
    
    input ViajeInput{
        nombre: String
        destino: String
    }

    input ClaveInput{
        clave: String
    }

    type Query {
       obtenerUnidades: [Unidad]
    }

    type Mutation{
        nuevoUnidad(input:UnidadInput): Unidad
        
        actualizarUnidad(id: ID!, input:UnidadInput): Unidad

        obtenerClave(input: ClaveInput): String
    }
`;

    module.exports = typeDefs;