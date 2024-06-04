import { useEffect, useState } from "react";
import SelectDropdown from "./select-comps/SelectDropdown";
import hideShowLabel from "@/helpers/hideShowLabel";

const PickerInput = ({
  label,
  type,
  selectOptions = null,
  formData: { formInputs, setFormInputs },
  pickerType,
  register,
  errors = null,
}) => {
  const [inputHasValue, setInputHasValue] = useState(false);
  //
  useEffect(() => {
    register(type, { required: true });
  })
  //
  return (
    <>
      {type === "timeOfDay" ? (
        <SelectDropdown
          selectOptions={selectOptions}
          formData={{ formInputs, setFormInputs }}
          pickerType={pickerType}
          register={register}
        />
      ) : (
        <div className="w-full h-full">
          <div
            className={`w-full relative border-b text-xl font-normal ${errors && errors[type] ? "border-red" : "border-lightGray"}`}
          >
            <label
              className={`absolute top-4 left-4 -translate-y-1 pointer-events-none ${errors && errors[type] ? "text-red/50" : "text-codGray/50"} ${inputHasValue ? "opacity-0" : "opacity-100"}`}
              htmlFor={type}
            >
              {label}
            </label>
            <input
              // {...register(type, { required: true })}
              className="w-full h-full p-4 outline-none text-codGray uppercase caret-beaver"
              type="text"
              name={type}
              id={type}
              value={formInputs[pickerType][type]}
              onFocus={() => setInputHasValue(true)}
              onBlur={() =>
                hideShowLabel(formInputs[pickerType][type], setInputHasValue)
              }
              onChange={(e) => {
                setFormInputs((oldVals) => {
                  return {
                    ...oldVals,
                    [pickerType]: {
                      ...oldVals[pickerType],
                      [type]: e.target.value,
                    },
                  };
                });
              }}
            />
          </div>
          {errors && errors[type] && (
            <p className="text-[10px] text-red mt-2">{errors[type]?.message}</p>
          )}
        </div>
      )}
    </>
  );
};

export default PickerInput;
