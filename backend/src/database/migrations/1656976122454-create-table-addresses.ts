import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createTableAddresses1656976122454 implements MigrationInterface {
  private table = new Table({
    name: 'addresses',
    columns: [
      {
        name: 'id',
        type: 'integer',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment',
      },
      {
        name: 'street',
        type: 'varchar',
        length: '255',
      },
      {
        name: 'number',
        type: 'varchar',
        length: '255',
      },
      {
        name: 'complement',
        type: 'varchar',
        length: '255',
      },
      {
        name: 'district',
        type: 'varchar',
        length: '255',
      },
      {
        name: 'city',
        type: 'varchar',
        length: '255',
      },
      {
        name: 'state',
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
