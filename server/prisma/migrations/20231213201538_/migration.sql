-- AlterTable
ALTER TABLE `Hotel` MODIFY `rating` INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `User` MODIFY `role` ENUM('partner', 'customer', 'admin') NULL;

-- CreateTable
CREATE TABLE `HotelImages` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `url` VARCHAR(191) NOT NULL,
    `hotelId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Room` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` VARCHAR(191) NOT NULL,
    `description` LONGTEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HotelRoom` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `numberOfRoom` INTEGER NOT NULL DEFAULT 1,
    `roomId` INTEGER NULL,
    `hotelId` INTEGER NULL,
    `pricePerGuest` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RoomImage` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `url` VARCHAR(191) NOT NULL,
    `hotelRoomId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `HotelImages` ADD CONSTRAINT `HotelImages_hotelId_fkey` FOREIGN KEY (`hotelId`) REFERENCES `Hotel`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HotelRoom` ADD CONSTRAINT `HotelRoom_roomId_fkey` FOREIGN KEY (`roomId`) REFERENCES `Room`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HotelRoom` ADD CONSTRAINT `HotelRoom_hotelId_fkey` FOREIGN KEY (`hotelId`) REFERENCES `Hotel`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RoomImage` ADD CONSTRAINT `RoomImage_hotelRoomId_fkey` FOREIGN KEY (`hotelRoomId`) REFERENCES `HotelRoom`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
