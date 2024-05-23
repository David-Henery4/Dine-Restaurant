import SelectDropdown from "./select-comps/SelectDropdown";

const PickerInput = ({ label, type, selectOptions = null }) => {
  //
  return (
    <>
      {type === "timeOfDaySelecter" ? (
        <SelectDropdown selectOptions={selectOptions}/>
      ) : (
        <div className="w-full relative border-b border-lightGray text-xl font-normal">
          <label
            className="text-codGray/50 absolute top-4 left-4 -translate-y-1 pointer-events-none"
            htmlFor={type}
          >
            {label}
          </label>
          <input
            className="w-full h-full p-4 outline-none text-codGray uppercase"
            type="text"
            name={type}
            id={type}
          />
        </div>
      )}
    </>
  );
};

export default PickerInput;
