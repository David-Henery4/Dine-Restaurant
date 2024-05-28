"use server"

const bookingAction = (formData) => {
  console.log({...formData});
  let rawData = {};
  for (const pair of formData.entries()) {
    const isString = typeof pair[0] === "string";
    if (isString && !pair[0].includes("$ACTION_")) {
      rawData = {
        [pair[0]]: pair[1],
        ...rawData,
      };
    }
  }
  console.log(rawData)
};

export default bookingAction