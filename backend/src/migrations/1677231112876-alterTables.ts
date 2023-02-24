import { MigrationInterface, QueryRunner } from "typeorm";

export class alterTables1677231112876 implements MigrationInterface {
    name = 'alterTables1677231112876'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "galleries" ALTER COLUMN "urlImage1" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "galleries" ALTER COLUMN "urlImage1" SET DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "galleries" ALTER COLUMN "urlImage2" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "galleries" ALTER COLUMN "urlImage2" SET DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "galleries" ALTER COLUMN "urlImage3" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "galleries" ALTER COLUMN "urlImage3" SET DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "galleries" ALTER COLUMN "urlImage4" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "galleries" ALTER COLUMN "urlImage4" SET DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "galleries" ALTER COLUMN "urlImage5" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "galleries" ALTER COLUMN "urlImage5" SET DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "galleries" ALTER COLUMN "urlImage6" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "galleries" ALTER COLUMN "urlImage6" SET DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "galleries" ALTER COLUMN "urlImage6" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "galleries" ALTER COLUMN "urlImage6" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "galleries" ALTER COLUMN "urlImage5" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "galleries" ALTER COLUMN "urlImage5" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "galleries" ALTER COLUMN "urlImage4" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "galleries" ALTER COLUMN "urlImage4" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "galleries" ALTER COLUMN "urlImage3" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "galleries" ALTER COLUMN "urlImage3" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "galleries" ALTER COLUMN "urlImage2" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "galleries" ALTER COLUMN "urlImage2" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "galleries" ALTER COLUMN "urlImage1" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "galleries" ALTER COLUMN "urlImage1" DROP NOT NULL`);
    }

}
