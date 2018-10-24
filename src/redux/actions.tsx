import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState, RootActions } from "./store";

// Actions interface
type ThunkResult<R> = ThunkAction<R, RootState, undefined, RootActions>;

export enum TestActionTypes {
  THUNK_ACTION = "THUNK_ACTION",
  SYNC_ACTION = "SYNC_ACTION"
}

export interface SyncAction extends Action {
  type: TestActionTypes.SYNC_ACTION;
  text: string;
}

export interface AsyncAction extends Action {
  type: TestActionTypes.THUNK_ACTION;
}

export type IActions = SyncAction | AsyncAction;

// Actions creators
export function testGetState(): ThunkResult<void> {
  return (dispatch, getState) => {
    dispatch({ type: TestActionTypes.THUNK_ACTION });
  };
}

export const syncActionCreator = (text: string): SyncAction => {
  return { type: TestActionTypes.SYNC_ACTION, text: text };
};
