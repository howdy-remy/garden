import { Plant, PlantToUser, prisma, User } from "@prisma/client";
import { Source } from "graphql";
import { Resolvers } from "./generated/graphql";

export const resolvers = {
  Query: {
    AllPlants: async (source, {input}, context) => {
      console.log(input?.name)
      return await context.prisma.plant.findMany({
        orderBy: [{ name: 'asc', }],
        where: {
          name: { contains: input?.name },
          ...(input?.type && {type: {
            has: input?.type
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
    },
    User: async ( source, { email }, { prisma }) => {
      return await prisma.user.findUnique({
        where: {email},
        include: {
          zipData: true
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
    Login: async (source, {email, issuer, zip}, { prisma }) => {
        const zipData = await prisma.zipData.findFirst({where: {zip}});

        const user: User = prisma.user.upsert({
          where: {email: email},
          update: {issuer: issuer,
          zipData: {
            connect: {
              id: zipData.id
            }
          }
          },
          create: {
            email, issuer,
            zipData: {
              connect: {
                id: zipData.id
              }
            }
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