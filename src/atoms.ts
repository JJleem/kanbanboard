import { atom, selector } from "recoil";

export const toDoState = atom({
  key: "toDO",
  default: ["a", "b", "c", "d", "e"],
});
