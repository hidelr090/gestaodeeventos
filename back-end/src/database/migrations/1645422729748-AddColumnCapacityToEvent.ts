import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddColumnCapacityToEvent1645422729748 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        Promise.all([
            await queryRunner.addColumn('event', new TableColumn({
                name: 'capacity',
                type: 'integer',
                isNullable: false,
            })),

            await queryRunner.addColumn('event', new TableColumn({
                name: 'price',
                type: 'float',
                isNullable: false,
                })),
            
            await queryRunner.dropColumns('ticket', ['price', 'availability']),
            ]);
            
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumns('event', ['capacity', 'price']);
        await queryRunner.addColumn('ticket', new TableColumn({
            name: 'price',
            type: 'float',
            isNullable: false,
        }));
        await queryRunner.addColumn('ticket', new TableColumn({
            name: 'availability',
            type: 'boolean',
            isNullable: false,
        }));
    }

}
