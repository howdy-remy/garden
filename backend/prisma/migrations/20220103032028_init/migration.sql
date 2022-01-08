-- CreateEnum
CREATE TYPE "Lifecycle" AS ENUM ('ANNUAL', 'PERENNIAL', 'BIANNUAL');

-- CreateEnum
CREATE TYPE "Season" AS ENUM ('WINTER', 'SPRING', 'SUMMER', 'FALL');

-- CreateEnum
CREATE TYPE "SoilPh" AS ENUM ('SLIGHTLY_ALKALINE', 'SLIGHTLY_ACIDIC', 'NEUTRAL');

-- CreateEnum
CREATE TYPE "SunExposure" AS ENUM ('FULL', 'PARTIAL', 'SHADE');

-- CreateEnum
CREATE TYPE "Type" AS ENUM ('VEGETABLE', 'FRUIT', 'HERBS', 'ANNUAL', 'PERENNIAL');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Plant" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "variety" TEXT NOT NULL,
    "scientificName" TEXT NOT NULL,
    "type" "Type"[],
    "lifecycle" "Lifecycle"[],
    "sunExposure" "SunExposure"[],
    "soilPh" "SoilPh"[],
    "bloomSeason" "Season"[],
    "daysToMaturity" TEXT NOT NULL,
    "yield" TEXT NOT NULL,
    "sowMethod" TEXT NOT NULL,
    "plantingNotes" TEXT NOT NULL,
    "spacing" TEXT NOT NULL,
    "height" TEXT NOT NULL,
    "spread" TEXT NOT NULL,
    "fruitSize" TEXT NOT NULL,
    "hardinessZones" INTEGER[],

    CONSTRAINT "Plant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlantToUser" (
    "id" SERIAL NOT NULL,
    "plantId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "PlantToUser_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PlantToUser" ADD CONSTRAINT "PlantToUser_plantId_fkey" FOREIGN KEY ("plantId") REFERENCES "Plant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlantToUser" ADD CONSTRAINT "PlantToUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
