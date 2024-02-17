/*
  Warnings:

  - You are about to alter the column `created_at` on the `invalid_tokens` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.

*/
-- AlterTable
ALTER TABLE `invalid_tokens` MODIFY `created_at` TIMESTAMP NOT NULL;

-- CreateTable
CREATE TABLE `carts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(100) NOT NULL,
    `product_id` INTEGER NOT NULL,
    `size_id` INTEGER NOT NULL,
    `quantity` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
