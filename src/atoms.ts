import { atom, selector } from "recoil";

export const hourState = atom<number>({
  key: "hour",
  default: 25,
});

export const minuteState = atom<number>({
  key: "minute",
  default: 0,
});

export const hourSelector = selector<number>({
  key: "hourSelector",
  get: ({ get }) => {
    const hour = get(hourState);
    return hour;
  },
  set: ({ set }, newHour) => {
    set(hourState, newHour);
  },
});

export const minuteSelector = selector<number>({
  key: "minuteSelector",
  get: ({ get }) => {
    const minute = get(minuteState);
    return minute;
  },
  set: ({ set }, newMinute) => {
    set(minuteState, newMinute);
  },
});
