
const formatDate = (day, month, year) => {
  const formatedDate = new Date(`${year}-${month}-${day}`);
  return formatedDate;
};

export default formatDate