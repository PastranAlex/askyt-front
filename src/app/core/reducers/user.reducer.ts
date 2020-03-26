import { createFeatureSelector, createSelector} from '@ngrx/store'
import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { User } from '../../models/user';
import { comparerByAlphabet } from '../../comparers';

import {
  UserActionsUnion,
  UserActionTypes
} from '../../core/actions/user.actions';

export interface State extends EntityState<User> {
  loading: boolean;
  loaded: boolean;
  currentUserId: number;
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>({
  selectId: (user: User) => user.id,
  sortComparer: comparerByAlphabet('ASC', 'firstName')
});

export const INITIAL_STATE: State = adapter.getInitialState({
  loading: false,
  loaded: false,
  currentUserId: null
});

export function reducer(
  state: State = INITIAL_STATE,
  action: UserActionsUnion
) {
  switch (action.type) {
    case UserActionTypes.Load:
      return { ...state, loading: true };

    case UserActionTypes.LoadFail:
      return { ...state, loading: false };

    case UserActionTypes.LoadSuccess:
      return adapter.addMany(action.users, {
        ...state,
        loading: false,
        loaded: true
      });

    case UserActionTypes.CreateSuccess:
      return adapter.addOne(action.user, {...state});

    case UserActionTypes.DeleteSuccess:
      return adapter.removeOne(action.id, {...state});

    case UserActionTypes.AddOne:
     return adapter.addOne(action.user, state);

    case UserActionTypes.DeleteSuccess:
      return adapter.removeOne(action.id, state);

    case UserActionTypes.Update:
      return { ...state, loading: true };

    case UserActionTypes.UpdateSuccess:
      return adapter.updateOne({ id: action.user.id, changes: action.user }, {
        ...state,
        loading: false,
        loaded: true
      });

    case UserActionTypes.UpdateFail:
      return { ...state, loading: false };

    case UserActionTypes.SelectCurrent:
      return { ...state, currentUserId: action.UserId };

    default:
      return state;
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors();

export const selectLoaded = (state: State) => state.loaded;
export const selectLoading = (state: State) => state.loading;

export const getUsersState = createFeatureSelector<State>('users');

export const getUsers = createSelector(
  getUsersState,
  selectAll
);

export const getUsersEntities = createSelector(
  getUsersState,
  selectEntities
);

export const selectCurrentUserId = createSelector(
  getUsersState,
  (state: State) => state.currentUserId
);

export const getCurrentUser = createSelector(
  getUsersEntities,
  selectCurrentUserId,
  (entities, currentUserId) => {
    if ( entities && currentUserId ) {
      return entities[currentUserId];
    } else {
      return null;
    }
  }
);
