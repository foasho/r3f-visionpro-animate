import { atom } from "recoil";

export const hoveredStateAtom = atom<string | null>({
  key: "hoveredState",
  default: null,
});

export const activeStateAtom = atom<string | null>({
  key: "activeState",
  default: null,
});