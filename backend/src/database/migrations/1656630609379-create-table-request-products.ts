import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class createTableRequestProducts1656630609379
  implements MigrationInterface
{
  private table = new Table({
    name: 'request_products',
    columns: [
      {
        name: 'id',
        type: 'integer',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment',
      },
      {
        name: 'productId',
        type: 'integer',
      },
      {
        name: 'requestId',
        type: 'integer',
      },
    ],
  });

  foreignKeyProduct = new TableForeignKey({
    columnNames: ['productId'],
    referencedTableName: 'products',
    referencedColumnNames: ['id'],
  });

  foreignKeyRequest = new TableForeignKey({
    columnNames: ['requestId'],
    referencedTableName: 'requests',
    referencedColumnNames: ['id'],
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    Promise.all([
      queryRunner.createTable(this.table),
      queryRunner.createForeignKey('request_products', this.foreignKeyProduct),
      queryRunner.createForeignKey('request_products', this.foreignKeyRequest),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    Promise.all([
      queryRunner.dropTable(this.table),
      queryRunner.dropForeignKey('request_products', this.foreignKeyProduct),
      queryRunner.dropForeignKey('request_products', this.foreignKeyRequest),
    ]);
  }
}
