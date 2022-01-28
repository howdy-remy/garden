-- AlterTable
ALTER TABLE "Plant" ALTER COLUMN "height" DROP NOT NULL,
ALTER COLUMN "spread" DROP NOT NULL,
ALTER COLUMN "germination_low" DROP NOT NULL,
ALTER COLUMN "germination_high" DROP NOT NULL,
ALTER COLUMN "emergence_low" DROP NOT NULL,
ALTER COLUMN "emergence_high" DROP NOT NULL;
