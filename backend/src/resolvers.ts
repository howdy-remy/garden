import { Plant, PlantToUser, prisma, User } from "@prisma/client";
import { Source } from "graphql";
import { Resolvers } from "./generated/graphql";

export const resolvers = {
  Query: {
    AllPlants: async (source, args, context) => await context.prisma.plant.findMany({
      include: {
        users: true
      }
    }),
  },
  Plant: {
    users: async (source, args, { prisma }) => prisma.user.findMany({where: {
      id: { in: source.users.map((obj) => obj.userId)}
    }})
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

    },
    AddPlantToUser: async(source, {plantId, email}, { prisma }) => {
      const plantToUser = prisma.plantToUser.upsert({
        where: {plantId: plantId },
        update: {},
        create: { 
          plant: {
            connect: {
              id: plantId
            }
          },
          user: {
            connect: {
              email: email
            }
          }
        }
      });
      return plantToUser;
    },
    DeletePlantToUser: async(source, {plantId, email}, { prisma }) => {
      const user = await prisma.user.findUnique({where: {email}});
      const plantToUser = await prisma.plantToUser.findFirst({where: {userId: user.id, plantId }})
      return await prisma.plantToUser.delete({where: { id: plantToUser.id }})
    }
  },
}