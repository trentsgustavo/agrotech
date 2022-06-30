import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class createTableRequests1656628726341 implements MigrationInterface {
  private table = new Table({
    name: 'requests',
    columns: [
      {
        name: 'id',
        type: 'integer',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment',
      },
      {
        name: 'total',
        type: 'decimal',
      },
      {
        name: 'quota',
        type: 'integer',
      },
      {
        name: 'paid',
        type: 'boolean',
      },
      {
        name: 'paymentDate',
        type: 'date',
      },
      {
        name: 'deliveryDate',
        type: 'date',
      },
      {
        name: 'createdAt',
        type: 'timestamptz',
        isNullable: false,
        default: 'now()',
      },
      {
        name: 'createdBy',
        type: 'integer',
      },
      {
        name: 'updatedAt',
        type: 'timestamptz',
        isNullable: false,
        default: 'now()',
      },
      {
        name: 'updatedBy',
        type: 'integer',
      },
    ],
  });

  foreignKeyCreated = new TableForeignKey({
    columnNames: ['createdBy'],
    referencedTableName: 'users',
    referencedColumnNames: ['id'],
  });

  foreignKeyUpdated = new TableForeignKey({
    columnNames: ['updatedBy'],
    referencedTableName: 'users',
    referencedColumnNames: ['id'],
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    Promise.all([
      queryRunner.createTable(this.table),
      queryRunner.createForeignKey('requests', this.foreignKeyCreated),
      queryRunner.createForeignKey('requests', this.foreignKeyUpdated),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    Promise.all([
      queryRunner.dropTable(this.table),
      queryRunner.dropForeignKey('requests', this.foreignKeyCreated),
      queryRunner.dropForeignKey('requests', this.foreignKeyUpdated),
    ]);
  }
}
