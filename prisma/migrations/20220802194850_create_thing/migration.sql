-- CreateTable
CREATE TABLE "Thing" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "Thing_pkey" PRIMARY KEY ("id")
);
