import { combineReducers } from "redux";
import { StoreRootState } from "types";
import searchModule from "./search";
export const rootLevelReducer = combineReducers({
  search: searchModule.reducer,
});
