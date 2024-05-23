import CheckIcon from "/public/assets/icons/icon-check.svg";

const DropdownInput = ({
  id,
  label,
  name,
  value,
  setIsDropdownActive,
  setActiveOption,
  options,
}) => {
  return (
    <div className="w-full relative px-4 py-2 flex justify-center items-center gap-4 hover:bg-offWhite">
      <div className="w-[13px]">
        <CheckIcon />
      </div>
      <label className="pointer-events-none">{label}</label>
      <input
        type="radio"
        name={name}
        id={id}
        value={value}
        className="absolute h-full w-full top-0 left-0 opacity-0 hover:cursor-pointer"
        onClick={() => {
          const newActiveItem = options.filter((option) => option.id === id)
          setActiveOption(newActiveItem[0])
          setIsDropdownActive(false);
        }}
      />
    </div>
  );
};

export default DropdownInput;
