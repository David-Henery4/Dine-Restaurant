
const datePickerInfo = [
  { id: 1, type: "day", label: "DD" },
  { id: 2, type: "month", label: "MM" },
  { id: 3, type: "year", label: "YYYY" },
];

const timePickerInfo = [
  { id: 1, type: "hour", label: "09" },
  { id: 2, type: "min", label: "00" },
  {
    id: 3,
    type: "timeOfDaySelecter",
    selectOptions: [
      { id: "am", value: "am", label: "AM", name: "timeOfDay" },
      { id: "pm", value: "pm", label: "PM", name: "timeOfDay" },
    ],
  },
];

export {
  datePickerInfo,
  timePickerInfo
}