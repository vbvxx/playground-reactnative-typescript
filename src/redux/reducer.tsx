import { IActions, TestActionTypes } from "./actions";
import { Reducer } from "redux";

export interface IState {
  text: string;
}

const defaultValue: IState = {
  text: "cool"
};

export const playground: Reducer<IState, IActions> = (
  state = defaultValue,
  action
) => {
  switch (action.type) {
    case TestActionTypes.SYNC_ACTION:
      return { ...state, text: action.text };
    default:
      return state;
  }
};
