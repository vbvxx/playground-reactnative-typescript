import { createStore, applyMiddleware, combineReducers, Reducer } from "redux";
import { playground, IState } from "./reducer";
import thunk, { ThunkMiddleware, ThunkAction } from "redux-thunk";
import { IActions } from "./actions";

export interface RootState {
  playground: IState;
}

export type RootActions = IActions;

const rootReducer = combineReducers({ playground });

const store = createStore<RootState, RootActions, {}, {}>(
  rootReducer,
  applyMiddleware(thunk as ThunkMiddleware<RootState, RootActions>)
);

export default store;
