import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createTableUsers1656628665164 implements MigrationInterface {
  private table = new Table({
    name: 'users',
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
        name: 'email',
        type: 'varchar',
        length: '255',
        isUnique: true,
        isNullable: false,
      },
      {
        name: 'password',
        type: 'varchar',
        length: '255',
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

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.table);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.table);
  }
}
