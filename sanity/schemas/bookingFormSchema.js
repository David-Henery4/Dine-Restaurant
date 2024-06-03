import { defineField, defineType } from "sanity";

const bookingFormSchema = defineType({
  name: "bookings",
  title: "Bookings",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "string",
    }),
    defineField({
      name: "time",
      title: "Time",
      type: "string",
    }),
    defineField({
      name: "amountOfPeople",
      title: "Amount of people",
      type: "number",
    }),
  ],
});

export default bookingFormSchema;
