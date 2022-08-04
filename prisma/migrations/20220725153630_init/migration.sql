/*
  Warnings:

  - Added the required column `_fire_id` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "_fire_id" VARCHAR(36) NOT NULL;
