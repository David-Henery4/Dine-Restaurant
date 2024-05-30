import { z } from "zod";
import formatDate from "@/helpers/formatDate";
import to12HourTime from "@/helpers/to12HourTime";

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
    date: z
      .object({
        day: z
          .string({
            required_error: "Day is required",
            invalid_type_error: "Day must be a string",
          })
          .length(2, { message: "Has to be two characters" }),
        //
        month: z
          .string({
            required_error: "Month is required",
            invalid_type_error: "Month must be a string",
          })
          .length(2, { message: "Has to be two characters" }),
        //
        year: z.coerce
          .string({
            required_error: "Year is required",
            invalid_type_error: "Year must be a string",
          })
          .length(4, { message: "Has to be four characters" }),
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
          val?.day,
          val.month,
          val.year
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
            message: "Can't be in the past",
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
          .number()
          .min(1, { message: "Can't be less than 1" })
          .max(12, { message: "Can't be more than 12" }),
        //
        minutes: z.coerce
          .number()
          .max(60, { message: "Can't be more than 60" }),
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
  })
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
      date?.day,
      date.month,
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
        path: ["time and date"],
      });
      return z.NEVER;
    }
    //
    return values;
  });

export default Booking;
