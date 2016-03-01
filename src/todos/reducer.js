import { ADD } from "./types";
const initialState = ["test"];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return [ ...state, action.payload.text ]

    default:
      return state;
  }
}
