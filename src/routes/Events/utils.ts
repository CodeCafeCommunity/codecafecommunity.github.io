export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
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

export const getViewRange = (year: number, month: number): [Date, Date] => {
  const startDate = new Date(year, month, 1);
  const endDate = new Date(year, month + 1, 0);

  while (startDate.getDay() !== 0) {
    startDate.setDate(startDate.getDate() - 1);
  }

  while (endDate.getDay() !== 6) {
    endDate.setDate(endDate.getDate() + 1);
  }

  return [startDate, endDate];
};
