import { atom, selector } from "recoil";

interface IToDoState {
  [key: string]: string[];
  to_do: string[];
  doing: string[];
  done: string[];
}

export const toDoState = atom<IToDoState>({
  key: "toDo",
  default: {
    to_do: [],
    doing: [],
    done: [],
  },
});
