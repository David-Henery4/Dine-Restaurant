import PickerInput from "./picker-comps/PickerInput"

const PickerContainer = ({ pickerType = "date", pickerInfo }) => {
  //
  return (
    <fieldset className="w-full">
      <legend className="text-xl font-normal text-codGray">
        Pick a {pickerType}
      </legend>
      <div className="flex justify-center items-center gap-[14px] mt-2">
        {pickerInfo.map((item) => {
          return (
            <PickerInput
              key={item?.id}
              type={item?.type}
              label={item?.label}
              selectOptions={item?.selectOptions}
            />
          );
        })}
      </div>
    </fieldset>
  );
};

export default PickerContainer