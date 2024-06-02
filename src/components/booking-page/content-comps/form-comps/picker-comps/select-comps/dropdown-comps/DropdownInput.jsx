import { useEffect } from "react";
import CheckIcon from "/public/assets/icons/icon-check.svg";

const DropdownInput = ({
  id,
  label,
  name,
  value,
  setIsDropdownActive,
  options,
  pickerType,
  setFormInputs,
  register,
  defaultChecked,
}) => {
  //
  useEffect(() => {
    register(name, { required: true });
  })
  //
  return (
    <div className="w-full relative px-4 py-2 flex justify-center items-center gap-4 hover:bg-offWhite">
      <div className="w-[13px]">
        <CheckIcon />
      </div>
      <label className="pointer-events-none">{label}</label>
      <input
        // {...register(name, { required: true })}
        defaultChecked={defaultChecked}
        type="radio"
        name={name}
        id={id}
        value={value}
        className="absolute h-full w-full top-0 left-0 opacity-0 hover:cursor-pointer caret-beaver"
        onClick={() => {
          const newActiveItem = options.filter((option) => option.id === id);
          setIsDropdownActive(false);
          setFormInputs((oldVals) => {
            return {
              ...oldVals,
              [pickerType]: {
                ...oldVals[pickerType],
                [name]: newActiveItem[0]?.value,
              },
            };
          });
        }}
      />
    </div>
  );
};

export default DropdownInput;
