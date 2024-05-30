import PickerInput from "./picker-comps/PickerInput"

const PickerContainer = ({
  pickerType = "date",
  pickerInfo,
  register,
  formData,
}) => {
  //
  return (
    <fieldset className="w-full smTab:grid smTab:gap-16">
      <legend className="text-xl font-normal text-codGray smTab:float-left smTab:inline-grid smTab:place-items-end smTab:pb-2">
        Pick a {pickerType}
      </legend>
      <div className="flex justify-center items-center gap-[14px] mt-2 smTab:col-start-2 smTab:col-end-3">
        {pickerInfo.map((item) => {
          return (
            <PickerInput
              key={item?.id}
              type={item?.type}
              label={item?.label}
              selectOptions={item?.selectOptions}
              formData={formData}
              pickerType={pickerType}
              register={register}
            />
          );
        })}
      </div>
    </fieldset>
  );
};

export default PickerContainer