import { TableColumn } from "typeorm";
export class AddColumnCapacityToEvent1645422729748 {
    async up(queryRunner) {
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
    async down(queryRunner) {
        await queryRunner.dropColumns('event', ['capacity', 'price']);
        await queryRunner.addColumn('ticket', new TableColumn({
            name: 'price',
            type: 'float',
            isNullable: true,
        }));
        await queryRunner.addColumn('ticket', new TableColumn({
            name: 'availability',
            type: 'boolean',
            isNullable: true,
        }));
    }
}
