import { Table } from "typeorm";
export class CreateCustomer1645340977574 {
    async up(queryRunner) {
        await queryRunner.createTable(new Table({
            name: 'customer',
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
                    name: 'cpf',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'phone',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'participation',
                    type: 'int',
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
                    default: 'now()',
                },
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('customer');
    }
}
