import { schemaMigrations, createTable, addColumns } from '@nozbe/watermelondb/Schema/migrations';

const migrations = schemaMigrations({
  migrations: [
    {
      toVersion: 2,
      steps: [
        addColumns({
          table: 'posts',
          columns: [
            { name: 'is_archived', type: 'boolean', isOptional: true },
          ],
        }),
      ],
    },
  ],
});

export default migrations;
