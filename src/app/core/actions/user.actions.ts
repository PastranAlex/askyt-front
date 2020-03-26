import { Action } from '@ngrx/store';
import { User } from '../../models/user';

export enum UserActionTypes {
  Load = '[User] Load',
  LoadSuccess = '[User] Load Success',
  LoadFail = '[User] Load Fail',

  Create = '[User] Create user',
  CreateSuccess = '[User] Create user success',
  CreateFail = '[User] Create user fail',

  AddOne = '[User] Add one',

  LoadSelf = '[User] Load self',
  LoadSelfSuccess = '[User] Load self Success',
  LoadSelfFail = '[User] Load self Fail',

  Update = '[User] Update',
  UpdateSuccess = '[User] Update Success',
  UpdateFail = '[User] Update Fail',
  UpdateOne = '[User] Update one user',

  Delete = '[User] Delete user',
  DeleteSuccess = '[User] Delete user Success',
  DeleteFail = '[User] Delete user Fail',

  SelectCurrent = '[User] Select current user'
}

export class Load implements Action {
  readonly type = UserActionTypes.Load;
  constructor(public op?: any) {}
}

export class LoadSuccess implements Action {
  readonly type = UserActionTypes.LoadSuccess;
  constructor(public users: User[]) {}
}

export class LoadFail implements Action {
  readonly type = UserActionTypes.LoadFail;
  constructor(public error: any) {}
}

export class Delete implements Action {
  readonly type = UserActionTypes.Delete;
  constructor(public id: any) {}
}

export class DeleteSuccess implements Action {
  readonly type = UserActionTypes.DeleteSuccess;
  constructor(public id: number) {}
}

export class DeleteFail implements Action {
  readonly type = UserActionTypes.DeleteFail;
  constructor(public error: any) {}
}

export class LoadSelf implements Action {
  readonly type = UserActionTypes.LoadSelf;
  constructor() {}
}

export class LoadSelfSuccess implements Action {
  readonly type = UserActionTypes.LoadSelfSuccess;
  constructor(public user: User) {
  }
}

export class LoadSelfFail implements Action {
  readonly type = UserActionTypes.LoadSelfFail;
  constructor(public error: any) {}
}

export class Update implements Action {
  readonly type = UserActionTypes.Update;
  constructor(public user: User) {}
}

export class AddOne implements Action {
  readonly type = UserActionTypes.AddOne;
  constructor(public user: User) {}
}

export class UpdateSuccess implements Action {
  readonly type = UserActionTypes.UpdateSuccess;
  constructor(public user: User) {}
}

export class UpdateFail implements Action {
  readonly type = UserActionTypes.UpdateFail;
  constructor(public error: any) {}
}

export class Create implements Action {
  readonly type = UserActionTypes.Create;
  constructor(public user: User) {}
}

export class CreateSuccess implements Action {
  readonly type = UserActionTypes.CreateSuccess;
  constructor(public user: User) {}
}

export class CreateFail implements Action {
  readonly type = UserActionTypes.CreateFail;
  constructor(public error: any) {}
}

export class SelectCurrent implements Action {
  readonly type = UserActionTypes.SelectCurrent;
  constructor(public UserId: number) {}
}

export class UpdateOne implements Action {
readonly type = UserActionTypes.UpdateOne;
constructor(public user: User) { }
}

export type UserActionsUnion =
  | Load
  | LoadSuccess
  | LoadFail
  | LoadSelf
  | LoadSelfSuccess
  | LoadSelfFail
  | Create
  | CreateSuccess
  | CreateFail
  | Delete
  | DeleteSuccess
  | DeleteFail
  | AddOne
  | Update
  | UpdateSuccess
  | UpdateFail
  | UpdateOne
  | SelectCurrent;