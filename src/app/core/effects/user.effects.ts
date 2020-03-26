import { Injectable } from "@angular/core";
import { UserService } from "../../../services/user.service";
import { Router } from "@angular/router";
import { User } from "../../models/user";
import { FlashService } from "../../../services/flash.service";

import {
  LoadFail,
  LoadSuccess,
  Load,
  Create,
  Delete,
  DeleteSuccess,
  DeleteFail,
  CreateSuccess,
  CreateFail,
  UserActionTypes,
  Update,
  UpdateSuccess,
  UpdateFail,
  AddOne,
  UpdateOne
} from "../actions/user.actions";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { catchError, map, switchMap, tap, concatMap } from "rxjs/operators";

@Injectable()
export class UserEffects {
  @Effect()
  load$: Observable<Action> = this.actions$.pipe(
    ofType<Load>(UserActionTypes.Load),
    switchMap((action) =>
      this.usersApi.getUsers().pipe(
        map((users: any[]) => new LoadSuccess(users)),
        catchError(error => of(new LoadFail(error)))
      )
    )
  );

  @Effect()
  update$: Observable<Action> = this.actions$.pipe(
    ofType<Update>(UserActionTypes.Update),
    map(action => action.user),
    switchMap(user =>
      this.usersApi.updateUser(user.id, user).pipe(
        map((userBack: any) => new UpdateSuccess(userBack)),
        catchError(error => of(new UpdateFail(error)))
      )
    )
  );

  @Effect()
  create$: Observable<Action> = this.actions$.pipe(
    ofType<Create>(UserActionTypes.Create),
    map(action => action.user),
    concatMap(user =>
      this.usersApi.createUser(user).pipe(
        map((savedUser: User) => new CreateSuccess(savedUser)),
        catchError(error => of(new CreateFail(error)))
      )
    )
  );

  @Effect({ dispatch: false })
  createFail$: Observable<Action> = this.actions$.pipe(
    ofType<CreateFail>(UserActionTypes.CreateFail),
    map(action => action.error),
    tap(res =>
      this.fs.emit({
        message: "No se pudo crear el nuevo usuario.",
        type: "danger"
      })
    )
  );

  @Effect()
  createSuccess$: Observable<Action> = this.actions$.pipe(
    ofType<CreateSuccess>(UserActionTypes.CreateSuccess),
    map(action => {
      this.fs.emit({
        type: "success",
        message: "Usuario creado correctamente."
      });
      this.router.navigate(["/admin/users"]);
      return new AddOne(action.user);
    })
  );

  @Effect({ dispatch: false })
  updateSuccess$: Observable<Action> = this.actions$.pipe(
    ofType<UpdateSuccess>(UserActionTypes.UpdateSuccess),
    map(action => {
      this.fs.emit({
        type: "success",
        message: "Usuario actualizado correctamente."
      });
      return new UpdateOne(action.user)
    })
  );

  @Effect()
  delete$: Observable<Action> = this.actions$.pipe(
    ofType<Delete>(UserActionTypes.Delete),
    map(action => action.id),
    concatMap(id => {
      return this.usersApi.deleteUser(id).pipe(
        map(response => {
          this.fs.emit({
            type: "success",
            message: "Usuario eliminado correctamente."
          });
          return new DeleteSuccess(id);
        }),
        catchError(error => of(new DeleteFail(error)))
      );
    })
  );

  // @Effect({ dispatch: false })
  // deleteSuccess$: Observable<Action> = this.actions$.pipe(
  //   ofType<DeleteSuccess>(UserActionTypes.DeleteSuccess),
  //   tap(action => {
  //   })
  // );


  constructor(
    private actions$: Actions,
    private usersApi: UserService,
    private router: Router,
    private fs: FlashService,
  ) {}
}