import { PrismaClient, Type } from '@prisma/client'
import seedData from './seedData';

const prisma = new PrismaClient()

const data = seedData.map(obj => ({
  type: [Type.VEGETABLE],
  lifecycle: [],
  soilPh: [],
  bloomSeason: [],
  hardinessZones: [],
  sunExposure: [],
  ...obj, 
}));

console.log(data[0])
const main = async () => {
 await prisma.plant.createMany({ data: data });
};

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })