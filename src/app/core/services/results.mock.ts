import { UserModel } from '@shared/models/user.model';
import { UpdatedSpendingModel } from '../../modules/pages/event/updated-spending.model';

export const userA: UserModel = {
  name: 'User A',
  id: '1',
};
export const userB: UserModel = {
  name: 'User B',
  id: '2',
};
export const userC: UserModel = {
  name: 'User C',
  id: '3',
};

const spending1: UpdatedSpendingModel = {
  who: userA,
  withWho: [userA, userB, userC],
  value: 900,
  userId: userA.id, // who: UserModel;
  usersId: [userA.id, userB.id, userC.id], // withWho: UserModel[];
  date: new Date(),
  name: 'Spending 1',
  eventId: 'eventId1',
  id: 'spending1',
};

const spending2: UpdatedSpendingModel = {
  who: userC,
  withWho: [userA, userB, userC],
  value: 300,
  userId: userA.id, // who: UserModel;
  usersId: [userA.id, userB.id, userC.id], // withWho: UserModel[];
  date: new Date(),
  name: 'Spending 1',
  eventId: 'eventId1',
  id: 'spending1',
};

const spending3: UpdatedSpendingModel = {
  who: userB,
  withWho: [userA, userB, userC],
  value: 600,
  userId: userA.id, // who: UserModel;
  usersId: [userA.id, userB.id, userC.id], // withWho: UserModel[];
  date: new Date(),
  name: 'Spending 1',
  eventId: 'eventId1',
  id: 'spending1',
};

const spending4: UpdatedSpendingModel = {
  who: userA,
  withWho: [userA],
  value: 200,
  userId: userA.id, // who: UserModel;
  usersId: [userA.id], // withWho: UserModel[];
  date: new Date(),
  name: 'Spending 1',
  eventId: 'eventId1',
  id: 'spending1',
};
const spending5: UpdatedSpendingModel = {
  who: userA,
  withWho: [userA],
  value: 300,
  userId: userA.id, // who: UserModel;
  usersId: [userA.id], // withWho: UserModel[];
  date: new Date(),
  name: 'Spending 1',
  eventId: 'eventId1',
  id: 'spending1',
};

export const spending = {
  spending1,
  spending2,
  spending3,
  spending4,
  spending5,
};
