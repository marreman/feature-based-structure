import { ADD } from "./types";

export function add(text) {
  return {
    type: ADD,
    payload: { text }
  };
}
