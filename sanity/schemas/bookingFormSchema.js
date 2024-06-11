import { defineField, defineType } from "sanity";
import IconBook from "/public/assets/icons/icon-book.svg"

const bookingFormSchema = defineType({
  name: "bookings",
  title: "Bookings",
  type: "document",
  orderings: [
    {
      title: "date, most furthest",
      name: "dateDesc",
      by: [
        {
          field: "date",
          direction: "desc",
        },
      ],
    },
    {
      title: "date, most recent",
      name: "dateAsc",
      by: [
        {
          field: "date",
          direction: "asc",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "date",
    },
    prepare({ subtitle, title }) {
      return {
        title,
        subtitle,
        media: IconBook,
      };
    },
  },
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
