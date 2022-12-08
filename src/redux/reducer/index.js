import * as acitons from "../actions";

const initialState = {};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case acitons.BUSCAR:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
