import {UserModel} from "./user.model";

export class SpendingModel {
  value: number;
  who: UserModel;
  withWho: UserModel[];
  date: Date;
  name: string;
}
