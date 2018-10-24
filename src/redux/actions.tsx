import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState, RootActions } from "./store";

type ThunkResult<R> = ThunkAction<R, RootState, undefined, RootActions>;

export enum TestActionTypes {
  THUNK_ACTION = "THUNK_ACTION",
  SYNC_ACTION = "SYNC_ACTION"
}

export interface SyncAction extends Action {
  type: TestActionTypes.SYNC_ACTION;
  text: string;
}

export function testGetState(): ThunkResult<void> {
  return (dispatch, getState) => {
    dispatch(syncActionCreator("ASYNC"));
  };
}

export type IActions = SyncAction;

// export function thunkActionCreator() {
//   return function(dispatch: Dispatch<any>) {
//     dispatch({ type: TestAction.THUNK_ACTION });
//   };

//dispatch: Dispatch<IActions>

export const syncActionCreator = (text: string): SyncAction => {
  return { type: TestActionTypes.SYNC_ACTION, text: text };
};
