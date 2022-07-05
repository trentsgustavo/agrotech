import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class createTableOrderProducts1656976202993
  implements MigrationInterface
{
  private table = new Table({
    name: 'order_products',
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
        name: 'orderId',
        type: 'integer',
      },
    ],
  });

  foreignKeyProduct = new TableForeignKey({
    columnNames: ['productId'],
    referencedTableName: 'products',
    referencedColumnNames: ['id'],
  });

  foreignKeyOrder = new TableForeignKey({
    columnNames: ['orderId'],
    referencedTableName: 'orders',
    referencedColumnNames: ['id'],
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    Promise.all([
      queryRunner.createTable(this.table),
      queryRunner.createForeignKey('order_products', this.foreignKeyProduct),
      queryRunner.createForeignKey('order_products', this.foreignKeyOrder),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    Promise.all([
      queryRunner.dropTable(this.table),
      queryRunner.dropForeignKey('order_products', this.foreignKeyProduct),
      queryRunner.dropForeignKey('order_products', this.foreignKeyOrder),
    ]);
  }
}
