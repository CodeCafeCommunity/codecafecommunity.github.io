export const months: [string, number][] = [
  ["January", 31],
  ["February", 28],
  ["March", 31],
  ["April", 30],
  ["May", 31],
  ["June", 30],
  ["July", 31],
  ["August", 31],
  ["September", 30],
  ["October", 31],
  ["November", 30],
  ["December", 31],
];
export const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const changeMonth = (value: number, currentDate: Date): Date => {
  const newDate = currentDate;
  newDate.setMonth(currentDate.getMonth() + value);
  return newDate;
};
