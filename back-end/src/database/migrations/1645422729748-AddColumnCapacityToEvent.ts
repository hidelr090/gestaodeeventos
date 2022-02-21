import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddColumnCapacityToEvent1645422729748 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('event', new TableColumn({
            name: 'capacity',
            type: 'integer',
            isNullable: false,
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('event', 'capacity');
    }

}
