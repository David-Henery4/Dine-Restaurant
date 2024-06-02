import PickerInput from "./picker-comps/PickerInput"

const PickerContainer = ({
  pickerType = "date",
  pickerInfo,
  register,
  formData,
  errors,
}) => {
  //
  return (
    <fieldset className="w-full smTab:grid smTab:gap-16">
      <legend
        className={`text-xl font-normal smTab:float-left smTab:inline-grid smTab:place-items-end smTab:pb-2 smTab:justify-items-start ${errors[pickerType] ? "text-red" : "text-codGray"}`}
      >
        Pick a {pickerType}
        {errors[pickerType] && (
          <span className="block text-[10px] text-red leading-none mb-auto">
            This field is invaild
          </span>
        )}
      </legend>
      <div className="flex justify-center items-start gap-[14px] mt-2 smTab:col-start-2 smTab:col-end-3">
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
              errors={errors[pickerType]}
            />
          );
        })}
      </div>
    </fieldset>
  );
};

export default PickerContainer