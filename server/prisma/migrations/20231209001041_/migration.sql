/*
  Warnings:

  - Added the required column `role` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User` ADD COLUMN `role` ENUM('partner', 'customer', 'admin') NOT NULL;

-- CreateTable
CREATE TABLE `Hotel` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `description` LONGTEXT NOT NULL,
    `webSite` VARCHAR(191) NULL,
    `rating` INTEGER NOT NULL,
    `streetAddres` VARCHAR(191) NULL,
    `city` VARCHAR(191) NOT NULL,
    `country` VARCHAR(191) NOT NULL,
    `postcode` VARCHAR(191) NULL,
    `mapUrl` VARCHAR(191) NULL,
    `ownerId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Hotel` ADD CONSTRAINT `Hotel_ownerId_fkey` FOREIGN KEY (`ownerId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE `Hotel` ADD CHECK (`rating` >= 0 AND `rating` <= 5);
