import { Plant, PlantToUser, prisma, User } from "@prisma/client";
import { Source } from "graphql";
import { Resolvers } from "./generated/graphql";

export const resolvers = {
  Query: {
    AllPlants: async (source, {input}, context) => {
      return await context.prisma.plant.findMany({
        orderBy: [{ name: 'asc', }],
        where: {
          name: { contains: input?.name, mode: 'insensitive' },
          ...(input?.ease && {ease: input?.ease}),
           ...(input?.sunlight && {sunlight: {
            has: input?.sunlight
          }}),
           ...(input?.season && {season: {
            has: input?.season
          }})
        },
        include: {
          users: true
        }
      })
    },
    PlantsForUser:async (source, {email}, {prisma}) => {
      const user = await prisma.user.findUnique({where: {email}});
      return await prisma.plant.findMany({
        where: {
          users: {
            some: {userId: user.id }
          }    
        }
      });
    }
},
  Plant: {
    users: async (source, args, { prisma }) => prisma.user.findMany({where: {
      id: { in: source.users?.map((obj) => obj.userId)}
    }})
  },
  Mutation: {
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
      const user = await prisma.user.findUnique({where: {email}});
      let plantToUser = await prisma.plantToUser.findFirst({where: {userId: user.id, plantId }})
      if(!plantToUser){
        plantToUser = prisma.plantToUser.create({
          data: { 
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
      }
      return plantToUser;
    },
    DeletePlantToUser: async(source, {plantId, email}, { prisma }) => {
      const user = await prisma.user.findUnique({where: {email}});
      const plantToUser = await prisma.plantToUser.findFirst({where: {userId: user.id, plantId }})
      return await prisma.plantToUser.delete({where: { id: plantToUser.id }})
    }
  },
}