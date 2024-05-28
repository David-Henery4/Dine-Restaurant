import MinusIcon from "/public/assets/icons/icon-minus.svg";
import PlusIcon from "/public/assets/icons/icon-plus.svg";

const NumInput = ({ register, formData: { formInputs, setFormInputs } }) => {
  //
  const handleStepUp = (e) => {
    e.preventDefault();
    if (formInputs?.amountOfPeople >= 12) return;
    setFormInputs((prevVals) => {
      return {
        ...prevVals,
        amountOfPeople: prevVals?.amountOfPeople + 1,
      };
    });
  };
  const handleStepDown = (e) => {
    e.preventDefault();
    if (formInputs?.amountOfPeople <= 1) return;
    setFormInputs((prevVals) => {
      return {
        ...prevVals,
        amountOfPeople: prevVals?.amountOfPeople - 1,
      };
    });
  };
  //
  return (
    <div className="w-full flex justify-between items-center">
      <button onClick={handleStepDown} className="p-2">
        <span aria-hidden={true}>
          <MinusIcon />
        </span>
        <span className="sr-only">
          Minus button to deincrement the amount of people for your booking by 1
        </span>
      </button>
      <div className="flex justify-center items-center text-lightBlack font-bold text-xl">
        <input
          {...register("amountOfPeople")}
          type="number"
          name="amountOfPeople"
          id="amountOfPeople"
          value={formInputs?.amountOfPeople}
          min={1}
          max={12}
          readOnly
          className="outline-none pointer-events-none text-center"
        />
        <label htmlFor="amountOfPeople">{`${formInputs?.amountOfPeople > 1 ? "People" : "Person"}`}</label>
      </div>
      <button onClick={handleStepUp} className="p-2">
        <PlusIcon />
        <span className="sr-only">
          Plus button to increment the amount of people for your booking by 1
        </span>
      </button>
    </div>
  );
};

export default NumInput;
