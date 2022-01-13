import { User } from "@prisma/client";
import { Resolvers } from "./generated/graphql";

export const resolvers = {
  Query: {
    AllPlants: async (source, args, context) => await context.prisma.plant.findMany(),
  },
  Mutation: {
    AddPlant: async (_, args, context) => {},
    Login: async (source, {email, issuer}, { prisma }) => {
        const user: User = prisma.user.upsert({
          where: {email: email},
          update: {issuer: issuer},
          create: {
            email: email, issuer: issuer
          }

        })
        return user;

    }
  },
}