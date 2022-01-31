import { PrismaClient } from '@prisma/client'
import plantData from './plantData';
import zipData from './zip_county_fips';

const prisma = new PrismaClient()

const main = async () => {
  await prisma.plant.createMany({ data: plantData });
  await prisma.zipData.createMany({ data: zipData });
};

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })