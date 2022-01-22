import { PrismaClient } from '@prisma/client'
import seedData from './seedData';

const prisma = new PrismaClient()

const data = seedData.map(obj => ({
  type: [],
  lifeCycle: [],
  soilPh: [],
  bloomSeason: [],
  hardinessZones: [],
  users: [],
  sunExposure: [],
  ...obj, 
}))
async function main() {
  prisma.plant.createMany({ data });
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })