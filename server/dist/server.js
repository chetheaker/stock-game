// import dotenv from 'dotenv';
// dotenv.config();
// import express from 'express';
// import router from './routers/router';
// const app = express();
// const PORT = process.env.PORT || 4040;
// app.use(router);
// app.listen(PORT, () => {
//   console.log(`Server listening at http://localhost:${PORT}`);
// })
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  type Book {
    title: String!
    author: String
    age: Int
  }

  type Query {
    books: [Book]
  }
`;
const resolvers = {
    Query: {
        books: () => books,
    },
};
const books = [
    {
        title: 'The Awakening',
        author: 'Kate Chopin',
        age: 13
    },
    {
        title: 'City of Glass',
        author: 'Paul Auster',
        age: 66
    },
];
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});
console.log(`🚀  Server ready at: ${url}`);
