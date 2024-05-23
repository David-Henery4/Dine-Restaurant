"use client"
import { useState } from "react";
import { ClickOffBackground, DropdownLabel, DropdownInput } from "./dropdown-comps";

const SelectDropdown = ({selectOptions}) => {
  const [isDropdownActive, setIsDropdownActive] = useState(false)
  const [activeOption,setActiveOption] = useState(selectOptions[0])
  //
  return (
    <div className="w-full h-full relative border-b border-lightGray text-xl font-normal">
      <ClickOffBackground
        isDropdownActive={isDropdownActive}
        setIsDropdownActive={setIsDropdownActive}
      />
      <DropdownLabel
        isDropdownActive={isDropdownActive}
        setIsDropdownActive={setIsDropdownActive}
        activeOption={activeOption}
      />
      <div
        className={`absolute top-[calc(100%-(-8px))] left-0 bg-white shadow-2xl shadow-codGray/50 z-20 ${isDropdownActive ? "block" : "hidden"}`}
      >
        {selectOptions?.map((item, _, ray) => {
          return (
            <DropdownInput
              key={item.id}
              {...item}
              setIsDropdownActive={setIsDropdownActive}
              setActiveOption={setActiveOption}
              options={ray}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SelectDropdown;
