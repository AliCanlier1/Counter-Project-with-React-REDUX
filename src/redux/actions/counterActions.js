import ActionTypes from "../actionTypes";

const incrementCounter = (value) =>{
    return {type:ActionTypes.counterActions.INCREMENT_COUNTER, payload:value}
}

const decrementCounter = (value) =>{
    return {type:ActionTypes.counterActions.DECREMENT_COUNTER, payload:value}
}

const actions ={incrementCounter, decrementCounter};

export default actions;