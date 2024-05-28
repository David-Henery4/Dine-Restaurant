"use client";
//
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import bookingSchema from "@/zod/bookingSchema";
//
import bookingAction from "@/actions/bookingAction";
import defaultFormInputs from "@/localData/defaultFormInputs";
//
import { Input, PickerContainer, NumInput, SubmitBtn } from "./form-comps";
import {
  datePickerInfo,
  timePickerInfo,
} from "@/localData/dateAndTimePickerData";
import { useState } from "react";

const BookingForm = () => {
  const [formInputs, setFormInputs] = useState(defaultFormInputs);
  const {
    formState: { isLoading, errors },
    clearErrors,
    register,
    handleSubmit,
  } = useForm({ resolver: zodResolver(bookingSchema) });
  //
  const handleValdationAndAction = (formData) => {
    handleSubmit();
    bookingAction(formData);
  };
  //
  return (
    <form
      action={handleValdationAndAction}
      className="mt-[91px] bg-white p-8 shadow-lg flex flex-col justify-center items-center gap-9 max-w-[540px] mx-auto smTab:p-12 smDesk:m-0"
    >
      <Input
        type="name"
        label="Name"
        register={register}
        formData={{ formInputs, setFormInputs }}
      />
      <Input
        type="email"
        label="Email"
        register={register}
        formData={{ formInputs, setFormInputs }}
      />
      <PickerContainer
        pickerType="date"
        pickerInfo={datePickerInfo}
        register={register}
        formData={{ formInputs, setFormInputs }}
      />
      <PickerContainer
        pickerType="time"
        pickerInfo={timePickerInfo}
        register={register}
        formData={{ formInputs, setFormInputs }}
      />
      <NumInput register={register} formData={{ formInputs, setFormInputs }} />
      <SubmitBtn />
    </form>
  );
};

export default BookingForm;
