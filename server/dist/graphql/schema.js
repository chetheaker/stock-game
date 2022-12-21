import { gql } from 'graphql-tag';
export const typeDefs = gql `
  type User {
    id: ID!
    username: String!
    email: String!
    password: String!
  }

  type Query {
    user(id: ID!): User
  }

  type Mutation {
    createUser(username: String!, password: String!, email: String!): User!
  }
`;
