import { TR } from "../actions/languageAction";
import { EN } from "../actions/languageAction";

const stateInitial = {
  data: "",
};

const languageReducer = (state = stateInitial, action) => {
  const { type } = action;
  switch (type) {
    case TR:
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default languageReducer;
