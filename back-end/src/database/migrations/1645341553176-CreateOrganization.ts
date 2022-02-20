import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateOrganization1645341553176 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'organization',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    isNullable: false,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'name',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'email',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'password_hash',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'cnpj',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'phone',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'address',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()',
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()'
                }
            ]
            }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('organization');
    }

}
