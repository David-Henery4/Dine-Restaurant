import { Input,PickerContainer } from "./form-comps";
import { datePickerInfo, timePickerInfo } from "@/localData/dateAndTimePickerData";

const BookingForm = () => {
  return (
    <form className="mt-[91px] bg-white p-8 shadow-lg flex flex-col justify-center items-center gap-9">
      <Input type="name" label="Name" />
      <Input type="email" label="Email" />
      <PickerContainer pickerType="date" pickerInfo={datePickerInfo} />
      <PickerContainer pickerType="time" pickerInfo={timePickerInfo} />
    </form>
  );
};

export default BookingForm;
