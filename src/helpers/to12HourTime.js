

const to12HourTime = (hour, timeOfDay) => {
  let userInputedHour = hour;
  if (timeOfDay.toLocaleLowerCase() === "pm" && hour !== 12) {
    // Afternoon
    userInputedHour += 12;
  } else if (timeOfDay.toLocaleLowerCase() === "am" && userInputedHour === 12) {
    // Midnight
    userInputedHour = 0;
  }
  return userInputedHour
};

export default to12HourTime