-- AlterTable
ALTER TABLE "users" RENAME CONSTRAINT "User_pkey" TO "users_pkey";

-- CreateTable
CREATE TABLE "coins" (
    "id" SERIAL NOT NULL,
    "amount" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "coins_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "coins" ADD CONSTRAINT "coins_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- RenameIndex
ALTER INDEX "User_email_key" RENAME TO "users_email_key";
