import { ActionReducerMap } from '@ngrx/store';

import * as UserReducer from './user.reducer';

export interface State{
  users: UserReducer.State;
}

export const reducers: ActionReducerMap<State>={
  users: UserReducer.reducer
}