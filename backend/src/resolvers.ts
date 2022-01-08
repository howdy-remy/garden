import { Resolvers } from "./generated/graphql";

export const resolvers = {
  Query: {
    AllPlants: async (source, args, context) => await context.prisma.plant.findMany(),
  },
  Mutation: {
    AddPlant: async (_, args, context) => {},
  },
}