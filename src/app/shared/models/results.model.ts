import { UserModel } from './user.model';

export interface ResultsModel {
  who: UserModel;
  how: number;
  whom: UserModel;
}
