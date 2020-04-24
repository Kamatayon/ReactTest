import MTypes from "./mutationTypes";

export const changeCaterogy = (name: string) => ({
  type: MTypes.CHANGE_CURRENT_CATEGORY,
  payload: {
    name,
  },
});
