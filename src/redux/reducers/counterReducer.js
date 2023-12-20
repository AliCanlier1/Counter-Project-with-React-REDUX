import ActionTypes from "../actionTypes";

const initialState = 5;

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.counterActions.INCREMENT_COUNTER:
      return state + action.payload;
    case ActionTypes.counterActions.DECREMENT_COUNTER:
      return state - action.payload;
    default:
      return state;
  }
};

export default counterReducer;
