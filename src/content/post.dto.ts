import { Media } from './media.dto';

export class Post {
  uuid!: string;
  owner?: string;
  postTime?: Date;
  caption?: string;
  frontPic?: Media;
  backPic?: Media;
}
