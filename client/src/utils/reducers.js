import { useReducer } from "react";
import {
    LOGGIN_TAGGLE,
    REGISTER_TAGGLE,
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case LOGGIN_TAGGLE:
      return {
        ...state,
        logginOpen: !state.logginOpen
      };

    case REGISTER_TAGGLE:
      return {
        ...state,
        registerOpen: !state.registerOpen
      };

    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState)
}