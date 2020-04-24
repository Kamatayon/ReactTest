import { createSelector } from "reselect";
import { StoreRootState } from "types";
import { SearchState } from "./types";

export const getState = (state: StoreRootState) => state.search;

export const getCurrentCategory = createSelector(
  [getState],
  (state) => state.currentCategory
);

export const getAllCategories = createSelector(
  [getState],
  (state) => state.categories
);
