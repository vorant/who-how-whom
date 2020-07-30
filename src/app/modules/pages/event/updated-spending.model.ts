import {SpendingModel} from "../../../shared/models/spending.model";
import {UserModel} from "../../../shared/models/user.model";

export interface UpdatedSpendingModel extends SpendingModel {
  who: UserModel;
  withWho: UserModel[];
}
