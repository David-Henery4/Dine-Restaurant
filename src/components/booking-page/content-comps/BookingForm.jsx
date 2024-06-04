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
import { useState, useEffect } from "react";
import { PatternLines } from "/public/assets/patterns";

const BookingForm = () => {
  const [formInputs, setFormInputs] = useState(defaultFormInputs);
  const [isServerError, setIsServerError] = useState({
    isError: false,
    msg: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState({
    isSubmitted: false,
    msg: "",
  });
  //
  const {
    formState: { errors, isValid, isValidating },
    register,
    trigger,
  } = useForm({
    resolver: zodResolver(bookingSchema),
    values: formInputs,
    defaultValues: defaultFormInputs,
  });
  //
  const handleValdationAndAction = async (e) => {
    e.preventDefault();
    setIsServerError({
      isError: false,
      msg: "",
    });
    trigger();
    if (!isValid) return;
    //
    const res = await bookingAction(formInputs);
    if (res.isError) {
      setIsServerError({
        isError: true,
        msg:
          res?.errorMsg ||
          "There has been an error submitting your booking request, please try again later.",
      });
      return;
    }
    // Handle after we get confirmation from sever action!
    if (!res.isError)
      setIsFormSubmitted({
        isSubmitted: true,
        msg: "Thank you for your booking request. We look forward to seeing you soon.",
      });
  };
  //
  useEffect(() => {
    setIsServerError({
      isError: false,
      msg: "",
    });
  }, [errors]);
  //
  return (
    <div className="relative">
      <form
        onSubmit={handleValdationAndAction}
        className="relative z-10 mt-[91px] bg-white p-8 shadow-lg flex flex-col justify-center items-center gap-9 max-w-[540px] mx-auto smTab:p-12 smDesk:m-0"
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
        {isFormSubmitted?.isSubmitted ? (
          <p className="text-center text-green">{isFormSubmitted?.msg}</p>
        ) : (
          <SubmitBtn isValidating={isValidating} />
        )}
        {isServerError.isError && (
          <p className="text-red text-center">{isServerError?.msg}</p>
        )}
      </form>
      <PatternLines className="hidden smDesk:block absolute -bottom-[38px] -left-[80px]" />
    </div>
  );
};

export default BookingForm;
