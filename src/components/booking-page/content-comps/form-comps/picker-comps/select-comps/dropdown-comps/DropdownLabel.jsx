import ArrowIcon from "/public/assets/icons/icon-arrow.svg";

const DropdownLabel = ({
  isDropdownActive,
  setIsDropdownActive,
  activeOption,
}) => {
  //
  return (
    <div
      className="relative py-4 z-20 flex justify-center items-center gap-2 hover:cursor-pointer"
      onClick={() => setIsDropdownActive(!isDropdownActive)}
    >
      <p className="leading-[normal]">{activeOption?.label}</p>
      <ArrowIcon />
    </div>
  );
};

export default DropdownLabel;
