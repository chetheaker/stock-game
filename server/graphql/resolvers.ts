import prisma from '../prisma/prisma.js';
import { User } from '../types/auth.js';
import { GraphQLError } from 'graphql';

export const resolvers = {
  Query: {
    async user(_, args) {
      const user = await prisma.user.findFirst({
        where: { id: args.id }
      });
      console.log(user);
      if (user) {
        return user;
      } else {
        throw new GraphQLError('user with this id does not exist');
      }
    }
  },
  Mutation: {
    async createUser(_, args: User) {
      const isExist = await prisma.user.findFirst({
        where: { email: args.email }
      });
      if (isExist === null) {
        return await prisma.user.create({ data: { ...args } });
      } else {
        throw new GraphQLError('user with this email already exists');
      }
    }
  }
};
