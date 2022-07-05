import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class createTableCustomers1656976142174 implements MigrationInterface {
  private table = new Table({
    name: 'customers',
    columns: [
      {
        name: 'id',
        type: 'integer',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment',
      },
      {
        name: 'name',
        type: 'varchar',
        length: '255',
      },
      {
        name: 'phone',
        type: 'varchar',
        length: '11',
      },
      {
        name: 'addressId',
        type: 'integer',
      },
      {
        name: 'active',
        type: 'boolean',
        isNullable: false,
        default: true,
      },
      {
        name: 'createdAt',
        type: 'timestamptz',
        isNullable: false,
        default: 'now()',
      },
      {
        name: 'updatedAt',
        type: 'timestamptz',
        isNullable: false,
        default: 'now()',
      },
    ],
  });

  foreignKey = new TableForeignKey({
    columnNames: ['addressId'],
    referencedTableName: 'addresses',
    referencedColumnNames: ['id'],
    onDelete: 'SET NULL',
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    Promise.all([
      queryRunner.createTable(this.table),
      queryRunner.createForeignKey('customers', this.foreignKey),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    Promise.all([
      queryRunner.dropTable(this.table),
      queryRunner.dropForeignKey('customers', this.foreignKey),
    ]);
  }
}
