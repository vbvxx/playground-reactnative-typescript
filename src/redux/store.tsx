import { createStore, applyMiddleware, combineReducers, Reducer } from "redux";
import { playground, IState } from "./reducer";
import thunk, { ThunkMiddleware, ThunkAction } from "redux-thunk";
import { IActions } from "./actions";
import { rootEpic } from "./epic/epic";
import { createEpicMiddleware } from "redux-observable";

export interface RootState {
  playground: IState;
}

export type RootActions = IActions;

const rootReducer = combineReducers({ playground });

const epicMiddleware = createEpicMiddleware<
  RootActions,
  RootActions,
  RootState,
  {}
>();

const store = createStore<RootState, RootActions, {}, {}>(
  rootReducer,
  applyMiddleware(
    thunk as ThunkMiddleware<RootState, RootActions>,
    epicMiddleware
  )
);
epicMiddleware.run(rootEpic);

export default store;
