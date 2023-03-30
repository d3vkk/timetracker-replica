import TimeData from "../types/TimeData";
import TimeCardData from "../types/TimeCardData";
import {
  iconWork,
  iconPlay,
  iconStudy,
  iconExercise,
  iconSocial,
  iconSelfCare,
} from "./icons";

const timeIcons: Array<string> = [
  iconWork,
  iconPlay,
  iconStudy,
  iconExercise,
  iconSocial,
  iconSelfCare,
];

const timeColors: Array<string> = [
  "hsl(15, 100%, 70%)",
  "hsl(195, 74%, 62%)",
  "hsl(348, 100%, 68%)",
  "hsl(145, 58%, 55%)",
  "hsl(264, 64%, 52%)",
  "hsl(43, 84%, 65%)",
];

const timeData: TimeData[] = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];

export const timeCardData: TimeCardData[] = [
  {
    ui: {
      icon: timeIcons[0],
      color: timeColors[0],
    },
    content: timeData[0],
  },
  {
    ui: {
      icon: timeIcons[1],
      color: timeColors[1],
    },
    content: timeData[1],
  },
  {
    ui: {
      icon: timeIcons[2],
      color: timeColors[2],
    },
    content: timeData[2],
  },
  {
    ui: {
      icon: timeIcons[3],
      color: timeColors[3],
    },
    content: timeData[3],
  },
  {
    ui: {
      icon: timeIcons[4],
      color: timeColors[4],
    },
    content: timeData[4],
  },
  {
    ui: {
      icon: timeIcons[5],
      color: timeColors[5],
    },
    content: timeData[5],
  },
];
