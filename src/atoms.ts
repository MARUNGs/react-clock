import { atom, selector } from "recoil";

const hourState = atom<number>({
  key: "hour",
  default: 0,
});

const minuteState = atom<number>({
  key: "minute",
  default: 0,
});

interface IPoint {
  current: number;
  target: number;
}

const roundPoint = atom<IPoint>({
  key: "rountPoint",
  default: {
    current: 0,
    target: 4,
  },
});

const goalPoint = atom<IPoint>({
  key: "goalPoint",
  default: {
    current: 0,
    target: 12,
  },
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
  get: ({ get }) => get(minuteState),
  set: ({ set }, newMinute) => set(minuteState, newMinute),
});

export const roundSelector = selector<IPoint>({
  key: "roundSelector",
  get: ({ get }) => get(roundPoint),
  set: ({ set }, info) => {
    set(roundPoint, info);
  },
});

export const goalSelector = selector<IPoint>({
  key: "goalSelector",
  get: ({ get }) => get(goalPoint),
  set: ({ set }, info) => {
    set(goalPoint, info);
  },
});
