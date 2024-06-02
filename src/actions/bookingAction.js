"use server"
import bookingSchema from "@/zod/bookingSchema";


const bookingAction = async (formData) => {
  const rawData = { ...formData };
  //
  const checkedDataResult = bookingSchema.safeParse(rawData)
  const hasFailed = !checkedDataResult.success;
  //
  if (hasFailed) {
    checkedDataResult?.error.addIssue({
      code: "custom",
      message:
        "There has been an error submitting your booking request, please try again later.",
      path: ["form"],
      fatal: true,
    });
    //
    return JSON.parse(JSON.stringify({
      isError: hasFailed,
      errorMsg: "There has been an error submitting your booking request, please try again later.",
    }))
  }
  //
  
  //
  return {
    isError: hasFailed,
    data: checkedDataResult.data
  }
};

export default bookingAction


  // (Used if "FormData" came directly from a server action)
  // let rawData = {};
  // for (const pair of formData.entries()) {
  //   const isString = typeof pair[0] === "string";
  //   if (isString && !pair[0].includes("$ACTION_")) {
  //     rawData = {
  //       [pair[0]]: pair[1],
  //       ...rawData,
  //     };
  //   }
  // }
  // console.log(rawData)