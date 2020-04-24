import { StoreRootState } from "types";
import { createStore, applyMiddleware } from "redux";
import { rootLevelReducer } from "./modules";
import {
  composeWithDevTools,
  devToolsEnhancer,
} from "redux-devtools-extension";

const initialState: StoreRootState = {} as any;

export const store = (() => {
  //TODO: middleware
  return createStore(
    rootLevelReducer,
    initialState as any,
    devToolsEnhancer({})
  );
})();
