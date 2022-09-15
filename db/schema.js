const { gql } = require('apollo-server');
// schema
const typeDefs = gql`
    type Coso {
        titulo: String
        tecnologia: String 
    }
    type Query {
        obteneralgo: Coso
    }
    `;

    module.exports = typeDefs;