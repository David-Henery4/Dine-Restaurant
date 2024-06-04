"use client";
import { useState } from "react";
import {
  ClickOffBackground,
  DropdownLabel,
  DropdownInput,
} from "./dropdown-comps";

const SelectDropdown = ({
  selectOptions,
  formData: { formInputs, setFormInputs },
  pickerType,
  register,
}) => {
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  //
  return (
    <div className="w-full h-full">
      <div className="w-full relative border-b border-lightGray text-xl font-normal">
        <ClickOffBackground
          isDropdownActive={isDropdownActive}
          setIsDropdownActive={setIsDropdownActive}
        />
        <DropdownLabel
          isDropdownActive={isDropdownActive}
          setIsDropdownActive={setIsDropdownActive}
          activeOption={formInputs?.time?.timeOfDay}
        />
        <div
          className={`absolute top-[calc(100%-(-8px))] left-0 bg-white shadow-2xl shadow-codGray/50 z-20 ${isDropdownActive ? "block" : "hidden"}`}
        >
          {selectOptions?.map((item, i, ray) => {
            const defaultChecked = i === 0 ? true : false;
            return (
              <DropdownInput
                key={item?.id}
                defaultChecked={defaultChecked}
                {...item}
                setIsDropdownActive={setIsDropdownActive}
                options={ray}
                pickerType={pickerType}
                setFormInputs={setFormInputs}
                register={register}
                activeOption={formInputs?.time?.timeOfDay}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SelectDropdown;
