import {UserModel} from "./user.model";

export interface SpendingModel {
  value: number;
  userId: string; // who: UserModel;
  usersId: string[]; // withWho: UserModel[];
  date: Date;
  name: string;
  eventId: string;
  id: string;
}
