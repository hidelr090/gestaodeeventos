import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateEvent1645341915310 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        Promise.all([
            await queryRunner.createTable(new Table({
                name: 'event',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        isNullable: false,
                        generationStrategy: 'uuid',
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'description',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'start_date',
                        type: 'date',
                        isNullable: false,
                    },
                    {
                        name: 'location',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'organization_id',
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
                        default: 'now()',
                    },
                ]
            })),

            await queryRunner.createForeignKey(
                'event',
                new TableForeignKey({
                    columnNames: ['organization_id'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'organization',
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                }),
            )


        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('event');
    }

}
