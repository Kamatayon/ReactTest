import { createReducer, InferActionTypes } from "store/utils";
import { SearchState } from "./types";
import * as actions from "./actions";
import MTypes from "./mutationTypes";
export const initialState: SearchState = {
  currentCategory: "All categories",
  categories: {
    First: {
      Foo: {
        Depth: {},
        Hell: {},
      },
      Bar: {},
    },
    Second: {
      Tomb: {},
      Lair: {},
    },
    Empty: {},
  },
};

type ActionTypes = InferActionTypes<typeof actions>;

export const reducer = createReducer<SearchState, ActionTypes>(initialState, {
  [MTypes.CHANGE_CURRENT_CATEGORY]: (state, { payload }) => ({
    ...state,
    currentCategory: payload.name,
  }),
});

export default reducer;
//Вообще такая структура стора - неправильно. Как и такие категории поиска. Но пока неизвестно какое вообще будет api, поэтому такая затычка. Здесь вообще много чего временного
