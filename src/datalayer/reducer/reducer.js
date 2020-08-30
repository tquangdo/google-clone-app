import { SET_SEARCH_TERM } from "../action/ActionType";

export const initialState = {
  term: null,
};
const reducer = (state = initialState, action) => {
  //Project này KO xài state
  switch (action.type) {
    case SET_SEARCH_TERM:
      return {
        ...state,
        term: action.term,
      };

    default:
      return state;
  }
};

export default reducer;
