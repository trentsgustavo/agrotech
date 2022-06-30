import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class createTableProducts1656628714475 implements MigrationInterface {
  private table = new Table({
    name: 'products',
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
        name: 'value',
        type: 'decimal',
      },
      {
        name: 'size',
        type: 'varchar',
        length: '255',
      },
      {
        name: 'brandId',
        type: 'integer',
      },
      {
        name: 'productTypeId',
        type: 'integer',
      },
    ],
  });

  foreignKeyBrand = new TableForeignKey({
    columnNames: ['brandId'],
    referencedTableName: 'brands',
    referencedColumnNames: ['id'],
  });

  foreignKeyType = new TableForeignKey({
    columnNames: ['productTypeId'],
    referencedTableName: 'product_types',
    referencedColumnNames: ['id'],
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    Promise.all([
      queryRunner.createTable(this.table),
      queryRunner.createForeignKey('products', this.foreignKeyBrand),
      queryRunner.createForeignKey('products', this.foreignKeyType),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    Promise.all([
      queryRunner.dropTable(this.table),
      queryRunner.dropForeignKey('products', this.foreignKeyBrand),
      queryRunner.dropForeignKey('products', this.foreignKeyType),
    ]);
  }
}
