import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createTableProductTypes1656976172880
  implements MigrationInterface
{
  private table = new Table({
    name: 'product_types',
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
        name: 'measure',
        type: 'varchar',
        length: '2',
      },
    ],
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.table);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.table);
  }
}
