import { z } from "zod";
import formatDate from "@/helpers/formatDate";
import to12HourTime from "@/helpers/to12HourTime";
import getLastDayOfMonth from "@/helpers/getLastDayOfMonth";

// Maybe try and combine the dates and use this:
// z.date().min(new Date("1900-01-01"), { message: "Too old" });

const Booking = z
  .object({
    name: z
      .string({
        required_error: "Name is required",
        invalid_type_error: "Name must be a string",
      })
      .trim()
      .transform((val, ctx) => {
        if (val.trim() === "" || val.trim().length <= 0)
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "This field is required",
          });
        if (val.trim().length < 2)
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Needs at least 2 characters",
          });
        return val;
      }),
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
    date: z
      .object({
        day: z.coerce
          .number({
            required_error: "Day is required",
            invalid_type_error: "Day must be a number",
          })
          .min(1, { message: "Minimum must be 01" })
          .max(getLastDayOfMonth(), {
            message: `Maximum must be ${getLastDayOfMonth()}`,
          }),
        //
        month: z.coerce
          .number({
            required_error: "Month is required",
            invalid_type_error: "Month must be a number",
          })
          .min(1, { message: "Minimum must be 01" })
          .max(12, { message: "Maximum must be 12" }),
        //
        year: z.coerce
          .number({
            required_error: "Year is required",
            invalid_type_error: "Year must be a Number",
          })
          .min(new Date().getFullYear(), {
            message: "Can't be in the past",
          })
          .max(new Date().getFullYear() + 1, {
            message: "Can't be more than a year in advance",
          }),
      })
      .transform((val, ctx) => {
        // Check to see if the date is valid (current date or in future)
        const currentDate = {
          day: `${new Date().getDate()}`.padStart(2, "0"),
          month: `${new Date().getMonth() + 1}`.padStart(2, "0"),
          year: `${new Date().getFullYear()}`,
        };
        //
        const userInputedDateFormated = formatDate(
          `${val?.day}`.padStart(2, "0"),
          `${val?.month}`.padStart(2, "0"),
          val?.year
        );
        const currentDateFormated = formatDate(
          currentDate.day,
          currentDate.month,
          currentDate.year
        );
        //
        if (+userInputedDateFormated < +currentDateFormated) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Date be in the past",
          });
          return z.NEVER;
        }
        //
        return val;
      }),
    //
    time: z
      .object({
        hour: z.coerce
          .number({
            required_error: "Hour required",
            invalid_type_error: "Hour must be a number",
          })
          .min(1, { message: "Minimum must be 01" })
          .max(12, { message: "Can't be higher than 12" })
          .transform((val, ctx) => {
            if (`${val}`.trim().length <= 0 || `${val}`.trim() === "") {
              ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Can't be empty",
              });
              return z.NEVER;
            }
            return Number(val);
          }),
        //
        minutes: z
          .string({
            required_error: "Minutes required",
            invalid_type_error: "Minutes must be a string",
          })
          .transform((val, ctx) => {
            console.log(val);
            if (val.trim().length <= 0 || val.trim() === "") {
              ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Can't be empty",
              });
              return z.NEVER;
            }
            if (!Number(val) && Number(val) !== 0) {
              console.log(val);
              ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Needs to be a number",
              });
              return z.NEVER;
            }
            if (Number(val) >= 60) {
              ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Minutes has to be lower than 60",
              });
              return z.NEVER;
            }
            return Number(val);
          }),
        //
        timeOfDay: z
          .string({
            required_error: "Time of day is required",
            invalid_type_error: "Time of day must be a String",
          })
          .trim()
          .toLowerCase()
          .length(2),
      })
      .transform((val, ctx) => {
        const { hour, minutes, timeOfDay } = val;
        const userInputedHour = to12HourTime(hour, timeOfDay);

        // Check opening times
        if (
          userInputedHour < 11 ||
          userInputedHour > 23 ||
          (userInputedHour === 23 && minutes > 0)
        ) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Closed at this time",
          });
          return z.NEVER;
        }

        // Formating current time & requested booking time
        const givenTime = new Date();
        givenTime.setHours(userInputedHour + 1, minutes, 0, 0);
        const currentTime = new Date(
          new Date().setHours(new Date().getHours() + 1)
        );

        // Difference between time
        const timeDifference = givenTime.getTime() - currentTime.getTime();

        // Check to see requested booking time is at least one hour ahead of current time
        if (timeDifference <= 3600000 && timeDifference > 1) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message:
              "Booking must be at least one hour in advance of current time",
          });
          return z.NEVER;
        }
        //
        return val;
      }),
    //
    amountOfPeople: z
      .number({
        required_error: "Amount of people",
        invalid_type_error: "Amount of people must be a Number",
      })
      .min(1, { message: "Minimum number of people is 1" })
      .max(12, { message: "Max number of people is 12" }),
  }) // Transform below is used for the entire form
  .transform((values, ctx) => {
    // Initial values
    const { date, time } = values;

    // Formatting the current date & requested booking date
    const currentDate = {
      day: `${new Date().getDate()}`.padStart(2, "0"),
      month: `${new Date().getMonth() + 1}`.padStart(2, "0"),
      year: `${new Date().getFullYear()}`,
    };
    const userInputedDateFormated = formatDate(
      `${date?.day}`.padStart(2, "0"),
      `${date?.month}`.padStart(2, "0"),
      date.year
    );
    const currentDateFormated = formatDate(
      currentDate.day,
      currentDate.month,
      currentDate.year
    );
    //
    const userInputedHour = to12HourTime(time.hour, time.timeOfDay);

    // Formating current time & requested booking time
    const givenTime = new Date();
    givenTime.setHours(userInputedHour + 1, time.minutes, 0, 0);
    const currentTime = new Date(
      new Date().setHours(new Date().getHours() + 1)
    );

    // Difference between time
    const timeDifference = givenTime.getTime() - currentTime.getTime();

    // Using timestamps to check if current date is equal to booking date & if requested time was earlier than the current time
    if (
      +userInputedDateFormated === +currentDateFormated &&
      timeDifference <= 0
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Requested time was before the current time",
        path: ["time"],
      });
      return z.NEVER;
    }
    //
    return values;
  });

export default Booking;
