import type { Field } from "payload";

export const dateRangeFields = (currentLabel: string): Field[] => [
  { name: "startDate", type: "date", required: true, label: "Start date", admin: { date: { pickerAppearance: "monthOnly" } } },
  { name: "endDate", type: "date", label: "End date", admin: { date: { pickerAppearance: "monthOnly" } } },
  { name: "current", type: "checkbox", defaultValue: false, label: currentLabel },
];

export const technologiesField: Field = {
  name: "technologies",
  type: "array",
  label: "Technologies",
  fields: [{ name: "name", type: "text", required: true }],
};

export const displayOrderField: Field = {
  name: "displayOrder",
  type: "number",
  defaultValue: 0,
  index: true,
  admin: { description: "Lower numbers appear first." },
};
