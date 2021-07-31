import { useReducer } from "react";
import {
    LOGGIN_TAGGLE,
    REGISTER_TAGGLE,
    NEW_PROJECT_TAGGLE,
    UPDATE_PROJECTS,
    UPDATE_SKILL_LIST
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
    case NEW_PROJECT_TAGGLE:
      return{
        ...state,
        createProject: !state.createProject
      }
    case UPDATE_PROJECTS:
      return{
        ...state,
        projects:[...action.projects]
      }
    case UPDATE_SKILL_LIST:
      return{
        ...state,
        skills:[...action.skills]
      }

    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState)
}