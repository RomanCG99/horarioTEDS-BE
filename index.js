const { ApolloServer, gql } = require('apollo-server');



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

const coso = [
    {
        titulo: 'JavaScript Moderno Guía Definitiva Construye +10 Proyectos',
        tecnologia: 'JavaScript ES6',
    },
    {
        titulo: 'React – La Guía Completa: Hooks Context Redux MERN +15 Apps',
        tecnologia: 'React',
    },
    {
        titulo: 'Node.js – Bootcamp Desarrollo Web inc. MVC y REST API’s',
        tecnologia: 'Node.js'
    },
    {
        titulo: 'ReactJS Avanzado – FullStack React GraphQL y Apollo',
        tecnologia: 'React'
    }
];

// resolvers 
const resolvers = {
    Query: {
        obteneralgo: () => coso[0]
    }
}

// servidor 
const server = new ApolloServer({
    typeDefs,
    resolvers
});

//arrancar el servidor 
server.listen().then(({ url }) => {
    console.log(`servidor listo en la URL ${url}`)
})
