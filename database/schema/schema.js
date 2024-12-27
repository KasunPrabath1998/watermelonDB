import { appSchema, tableSchema } from '@nozbe/watermelondb';

const schema = appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'posts',
      columns: [
        { name: 'title', type: 'string' },
        { name: 'subtitle', type: 'string', isOptional: true },
        { name: 'body', type: 'string' },
        { name: 'is_pinned', type: 'boolean' },
      ],
    }),
  ],
});

export default schema;


/*
import { SQLiteAdapter } from '@nozbe/watermelondb/adapters/sqlite';
import { appSchema, tableSchema } from '@nozbe/watermelondb';

const schema = appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'tasks',
      columns: [
        { name: 'name', type: 'string' },
        { name: 'completed', type: 'boolean' },
      ],
    }),
  ],
});

const adapter = new SQLiteAdapter({
  dbName: 'watermelonapp',
  schema,
});

const database = new Database({
  adapter,
  modelClasses: [], // Add your model classes here
});

*/
