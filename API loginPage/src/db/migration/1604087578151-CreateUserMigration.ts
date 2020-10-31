import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUserMigration1604087578151 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

        await queryRunner.createTable(new Table({
            name: 'users',
            columns: [
                {
                name: 'id',
                type: 'uuid',
                unsigned: true,
                isPrimary: true,
                generationStrategy: 'uuid',
                default: 'uuid_generate_v4()'
            },
            {
                name: "fullName",
                type: "varchar",
                isUnique: true
            },
            {
                name: "email",
                type: "varchar",
                isUnique: true
            },
            {
                name: "password",
                type: "varchar"
            }
        ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
        await queryRunner.query('DROP EXTENSION "uuid-ossp"')
    }
   
}
