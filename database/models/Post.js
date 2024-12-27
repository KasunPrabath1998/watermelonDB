import { Model } from '@nozbe/watermelondb';
import { field } from '@nozbe/watermelondb/decorators';

class Post extends Model {
  static table = 'posts';

  @field('title') title;
  @field('subtitle') subtitle;
  @field('body') body;
  @field('is_pinned') isPinned;
}

export default Post;
