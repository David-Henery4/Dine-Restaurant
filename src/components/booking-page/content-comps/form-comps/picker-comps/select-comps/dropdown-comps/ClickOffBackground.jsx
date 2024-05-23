

const ClickOffBackground = ({ isDropdownActive, setIsDropdownActive }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full z-10 ${isDropdownActive ? "block" : "hidden"}`}
      onClick={() => setIsDropdownActive(false)}
    ></div>
  );
};

export default ClickOffBackground