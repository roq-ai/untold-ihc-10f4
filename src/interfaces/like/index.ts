import { UserInterface } from 'interfaces/user';
import { PostInterface } from 'interfaces/post';
import { GetQueryInterface } from 'interfaces';

export interface LikeInterface {
  id?: string;
  user_id: string;
  post_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  post?: PostInterface;
  _count?: {};
}

export interface LikeGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  post_id?: string;
}
