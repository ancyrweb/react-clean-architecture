import {
  CombinedState,
  combineReducers,
  compose,
  legacy_createStore,
  Reducer,
  Store,
} from "redux";
import { postReducer } from "../post/post.reducer";
import { AllActions } from "./redux.actions";

const allReducers = combineReducers({
  post: postReducer,
});

export type AllState = typeof allReducers extends Reducer<infer S, AllActions>
  ? S
  : never;

export type AppStore = Store<AllState, AllActions>;

export const createEnhancers = (): any => {
  let enhancers = [];
  if (process.browser && (window as any).__REDUX_DEVTOOLS_EXTENSION__) {
    enhancers.push((window as any).__REDUX_DEVTOOLS_EXTENSION__());
  }
  return compose(...enhancers);
};

export const createAppStore = () => {
  let enhancers = [];
  if (process.browser && (window as any).__REDUX_DEVTOOLS_EXTENSION__) {
    enhancers.push((window as any).__REDUX_DEVTOOLS_EXTENSION__());
  }

  const store: AppStore = legacy_createStore(allReducers, createEnhancers());
  return store;
};
