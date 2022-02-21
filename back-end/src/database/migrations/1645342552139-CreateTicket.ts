import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateTicket1645342552139 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        Promise.all([
            await queryRunner.createTable(new Table({
                name: 'ticket',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        isNullable: false,
                        generationStrategy: 'uuid',
                    },
                    {
                        name: 'price',
                        type: 'float',
                        isNullable: false,
                    },
                    {
                        name: 'availability',
                        type: 'boolean',
                        isNullable: false,
                        default: true,
                    },
                    {
                        name: 'payment_method',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'customer_id',
                        type: 'uuid',
                        isNullable: true,
                    },
                    {
                        name: 'event_id',
                        type: 'uuid',
                        isNullable: false,
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
                ]})),
            
            await queryRunner.createForeignKey(
                'ticket',
                new TableForeignKey({
                    columnNames: ['customer_id'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'customer',
                    onDelete: 'SET NULL'
                })),
            
            await queryRunner.createForeignKey(
                'ticket',
                new TableForeignKey({
                    columnNames: ['event_id'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'event',
                    onDelete: 'CASCADE'
                })),

        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('ticket');
    }

}
