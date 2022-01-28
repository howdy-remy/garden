-- CreateEnum
CREATE TYPE "BloomTime" AS ENUM ('EARLY_SPRING', 'MID_SPRING', 'LATE_SPRING', 'EARLY_SUMMER', 'MID_SUMMER', 'LATE_SUMMER', 'EARLY_FALL', 'MID_FALL', 'LATE_FALL');

-- CreateEnum
CREATE TYPE "Ease" AS ENUM ('EASY', 'MODERATE', 'DIFFICULT');

-- CreateEnum
CREATE TYPE "Lifecycle" AS ENUM ('ANNUAL', 'PERENNIAL');

-- CreateEnum
CREATE TYPE "Propagate" AS ENUM ('SEED', 'DIVISION', 'SEPARATION', 'CUTTINGS');

-- CreateEnum
CREATE TYPE "Season" AS ENUM ('COOL', 'WARM');

-- CreateEnum
CREATE TYPE "Shape" AS ENUM ('CUSHION', 'SPREADING', 'UPRIGHT', 'CLIMBING', 'TRAILING', 'GRASS', 'FAN');

-- CreateEnum
CREATE TYPE "Sunlight" AS ENUM ('FULL', 'PARTIAL', 'SHADE');

-- CreateEnum
CREATE TYPE "Type" AS ENUM ('VEGETABLE', 'FRUIT', 'HERBS', 'ANNUAL', 'PERENNIAL');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "issuer" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Plant" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "variety" TEXT,
    "scientific_name" TEXT,
    "season" "Season"[],
    "family" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "sunlight" "Sunlight"[],
    "soil" TEXT,
    "soil_description" TEXT,
    "ph_low" INTEGER,
    "ph_high" INTEGER,
    "lifecycle" "Lifecycle"[],
    "ease" "Ease" NOT NULL,
    "height" TEXT NOT NULL,
    "spread" TEXT NOT NULL,
    "bloom_time" "BloomTime"[],
    "shape" "Shape"[],
    "propagate" "Propagate"[],
    "germination_low" INTEGER NOT NULL,
    "germination_high" INTEGER NOT NULL,
    "emergence_low" INTEGER NOT NULL,
    "emergence_high" INTEGER NOT NULL,
    "years" INTEGER,
    "care" TEXT NOT NULL,

    CONSTRAINT "Plant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlantToUser" (
    "id" SERIAL NOT NULL,
    "plantId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "PlantToUser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_issuer_key" ON "User"("issuer");

-- AddForeignKey
ALTER TABLE "PlantToUser" ADD CONSTRAINT "PlantToUser_plantId_fkey" FOREIGN KEY ("plantId") REFERENCES "Plant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlantToUser" ADD CONSTRAINT "PlantToUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
