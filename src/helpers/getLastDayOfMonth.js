

const getLastDayOfMonth = () => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const date = new Date(currentYear, currentMonth + 1, 0);
  return date.getDate();
}

export default getLastDayOfMonth