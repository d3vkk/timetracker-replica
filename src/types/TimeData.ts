import TimeFrame from "./TimeFrame";

interface TimeData {
  title: string;
  timeframes: {
    daily: TimeFrame;
    weekly: TimeFrame;
    monthly: TimeFrame;
  };
}

export default TimeData;
