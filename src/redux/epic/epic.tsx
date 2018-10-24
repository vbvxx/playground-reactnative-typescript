import { ajax } from "rxjs/ajax";
import { switchMap, map } from "rxjs/operators";
import { Epic, ofType, combineEpics } from "redux-observable";
import { RootState, RootActions } from "../store";
import { TestActionTypes, syncActionCreator } from "../actions";

const fetchUserTypedEpic: Epic<RootActions, RootActions, RootState> = (
  action$,
  state
) => {
  return action$.pipe(
    ofType(TestActionTypes.THUNK_ACTION),
    switchMap((action$, index) => {
      console.log("HERE IN EPIC");
      return ajax.getJSON("https://api.github.com/users/vbvxx").pipe(
        map(response => {
          console.log(response);
          return syncActionCreator("typed epic chef");
        })
      );
    })
  );
};

export const rootEpic = combineEpics<RootActions, RootActions, RootState, {}>(
  fetchUserTypedEpic
);
