import { defineField, defineType } from "sanity";

const bookingFormSchema = defineType({
  name: "bookings",
  title:"Bookings",
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
      type: "string"
    }),
    defineField({
      name: "date",
      title: "Date",
    }),
    defineField({
      name: "time",
      title: "Time",
    }),
    defineField({
      name: "amountOfPeople",
      title: "Amount of people",
      type: "number"
    }),
  ]
})

export default bookingFormSchema