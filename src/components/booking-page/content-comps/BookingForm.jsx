"use client";
//
import { useForm, useController, useFormState } from "react-hook-form";
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
import { useState, useEffect } from "react";

const BookingForm = () => {
  const [formInputs, setFormInputs] = useState(defaultFormInputs);
  //
  const {
    formState: { isLoading, errors, defaultValues, isValid,  },
    clearErrors,
    register,
    handleSubmit,
    control,
    trigger,
  } = useForm({
    resolver: zodResolver(bookingSchema),
    values: formInputs,
    defaultValues: formInputs,
  });
  //
  const handleValdationAndAction = () => {
    //
    trigger();
    const errorKeysRay = Object.keys(errors);
    if (errorKeysRay.length >= 1) return;
    if (isValid){
      console.log("called")
      bookingAction(formInputs);
    }
  };
  //
  useEffect(() => {
    console.log(errors)
    console.log(Object.entries(errors).length >=1);
    console.log(errors?.name);
    console.log(errors?.email);
    console.log(errors?.date);
    console.log(errors?.time);
    console.log(errors?.amountOfPeople);
  }, [errors]);
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
        errors={errors}
      />
      <Input
        type="email"
        label="Email"
        register={register}
        formData={{ formInputs, setFormInputs }}
        errors={errors}
      />
      <PickerContainer
        pickerType="date"
        pickerInfo={datePickerInfo}
        register={register}
        formData={{ formInputs, setFormInputs }}
        errors={errors}
      />
      <PickerContainer
        pickerType="time"
        pickerInfo={timePickerInfo}
        register={register}
        formData={{ formInputs, setFormInputs }}
        errors={errors}
      />
      {errors?.date?.message && (
        <p className="text-sm text-red">{errors?.date?.message}</p>
      )}
      {errors?.time?.message && (
        <p className="text-sm text-red">{errors?.time?.message}</p>
      )}
      <NumInput
        register={register}
        formData={{ formInputs, setFormInputs }}
        errors={errors}
      />
      <SubmitBtn />
    </form>
  );
};

export default BookingForm;
