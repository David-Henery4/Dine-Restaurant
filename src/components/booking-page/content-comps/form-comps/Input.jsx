import { useEffect, useState } from "react";
import hideShowLabel from "@/helpers/hideShowLabel";

const Input = ({
  label,
  type,
  register,
  formData: { formInputs, setFormInputs },
  errors,
}) => {
  const [inputHasValue, setInputHasValue] = useState(false);
  //
  useEffect(() => {
    register(type, { required: true });
  });
  //
  return (
    <div className="w-full">
      <div
        className={`w-full relative border-b text-xl font-normal ${errors[type] ? "border-red text-red/50" : "border-lightGray text-codGray/50"}`}
      >
        <label
          className={`absolute top-4 left-4 -translate-y-1 pointer-events-none ${inputHasValue ? "opacity-0" : "opacity-100"}`}
          htmlFor={type}
        >
          {label}
        </label>
        <input
          // {...register(type, { required: true })}
          className="w-full h-full p-4 outline-none text-codGray caret-beaver"
          type="text"
          name={type}
          id={type}
          value={formInputs[type]}
          onFocus={() => setInputHasValue(true)}
          onBlur={() => hideShowLabel(formInputs[type], setInputHasValue)}
          onChange={(e) => {
            setFormInputs((oldVals) => {
              return {
                ...oldVals,
                [type]: e.target.value,
              };
            });
          }}
        />
      </div>
      {errors[type] && (
        <p className="mt-3 ml-4 text-[10px] text-red">
          {errors[type]?.message}
        </p>
      )}
    </div>
  );
};

export default Input;
