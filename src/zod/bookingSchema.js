import { z } from "zod";

// Maybe try and combine the dates and use this:
// z.date().min(new Date("1900-01-01"), { message: "Too old" });

const Booking = z.object({
  name: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    })
    .trim()
    .min(2, { message: "Must be at least 2 characters" }),
  //
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a string",
    })
    .trim()
    .email({ message: "Invalid email address" })
    .min(5, { message: "Must be at least 5 characters" }),
  //
  date: z.object({
    day: z.coerce.number({
      required_error: "Day is required",
      invalid_type_error: "Day must be a string or Number",
    }),
    //
    month: z.coerce.number({
      required_error: "Month is required",
      invalid_type_error: "Month must be a string or Number",
    }),
    //
    year: z.coerce.number({
      required_error: "Year is required",
      invalid_type_error: "Year must be a string or Number",
    }),
  }),
  //
  time: z.object({
    hour: z
      .number()
      .min(1, { message: "Can't be less than 1" })
      .max(12, { message: "Can't be more than 12" }),
    //
    minutes: z
      .number()
      .min(1, { message: "Can't be less than 01" })
      .max(60, { message: "Can't be more than 60" }),
    //
    timeOfDay: z
      .string({
        required_error: "Time of day is required",
        invalid_type_error: "Time of day must be a String",
      })
      .trim(),
  }),
  //
  amountOfPeople: z
    .number()
    .min(1, { message: "Minimum number of people is 1" })
    .max(12, { message: "Max number of people is 12" }),
});

export default Booking