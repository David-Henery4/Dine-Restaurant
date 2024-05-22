const PickerInput = ({ label, type, selectOptions = null }) => {
  //
  return (
    <>
      {type === "timeOfDaySelecter" ? (
        <div className="w-full h-full relative border-b border-lightGray text-xl font-normal">
          <div className="p-4">
            <p className="leading-[normal]">{selectOptions && selectOptions[0].label}</p>
          </div>
          <div className="absolute top-full left-0 p-4 pr-7 bg-white shadow-2xl">
            {selectOptions?.map((item) => {
              return (
                <div key={item.id} className="w-full">
                  <label className="">{item?.label}</label>
                  <input
                    type="radio"
                    name={item.name}
                    id={item.id}
                    value={item.value}
                    className=""
                  />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="w-full relative border-b border-lightGray text-xl font-normal">
          <label
            className="text-codGray/50 absolute top-4 left-4 -translate-y-1"
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
