import { Model } from '@nozbe/watermelondb';
import { field } from '@nozbe/watermelondb/decorators';

class Task extends Model {
  static table = 'tasks';

  @field('name') name;
  @field('is_completed') isCompleted;
}

export default Task;
