//A reducer is a function that receives the current state and an action object, decides how to update the state if necessary,
//and returns the new state: (state, action) => newState.

import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

const initialState = [];

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case SET_ALERT:
            return [...state, payload];
        case REMOVE_ALERT:
            return state.filter((alert) => alert.id !== payload);
        default:
            return state;
    }
}