-- DropEnum
DROP TYPE "Type";

-- CreateTable
CREATE TABLE "ZipData" (
    "zip" TEXT NOT NULL,
    "stcountyfp" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "countyname" TEXT NOT NULL,
    "classfp" TEXT NOT NULL,

    CONSTRAINT "ZipData_pkey" PRIMARY KEY ("zip")
);
