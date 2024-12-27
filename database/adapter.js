import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import schema from './schema/schema';
import migrations from './schema/migrations';

const adapter = new SQLiteAdapter({
  schema,
  migrations,
  jsi: true,
  onSetUpError: (error) => {
    console.error('Database setup error:', error);
  },
});

export default adapter;
