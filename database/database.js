import { Database } from '@nozbe/watermelondb';
import Post from './models/Post';
import adapter from './adapter';

const database = new Database({
  adapter,
  modelClasses: [Post],
});

export default database;
