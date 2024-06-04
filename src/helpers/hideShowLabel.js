const hideShowLabel = (inputValue, setFunction) => {
  inputValue?.trim()?.length >= 1 ? setFunction(true) : setFunction(false);
};

export default hideShowLabel;
