import { PrismaClient } from '@prisma/client'
import plantData from './plantData';

const prisma = new PrismaClient()

const main = async () => {
 await prisma.plant.createMany({ data: plantData });
};

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })