import { atom } from "recoil";

export const hour = atom<number>({
  key: "hour",
  default: 25,
});

export const minute = atom<number>({
  key: "minute",
  default: 0,
});
