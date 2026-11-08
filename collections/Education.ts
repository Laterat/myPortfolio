import type { CollectionConfig } from "payload";
import { authenticated, publishedOrAuthenticated } from "../lib/payload/access";
import { dateRangeFields, displayOrderField } from "../lib/payload/fields";
import { revalidatePortfolio } from "../lib/payload/revalidate";

export const Education: CollectionConfig = {
  slug: "education",
  admin: { useAsTitle: "institution", defaultColumns: ["institution", "qualification", "startDate", "current", "displayOrder", "_status"], group: "Portfolio" },
  access: { read: publishedOrAuthenticated, create: authenticated, update: authenticated, delete: authenticated },
  hooks: { afterChange: [({ doc }) => { revalidatePortfolio(); return doc; }], afterDelete: [({ doc }) => { revalidatePortfolio(); return doc; }] },
  versions: { drafts: { autosave: true, validate: true } },
  indexes: [{ fields: ["displayOrder", "startDate"] }],
  fields: [
    { name: "institution", type: "text", required: true },
    { name: "qualification", type: "text", required: true },
    { name: "fieldOfStudy", type: "text" },
    { name: "location", type: "text" },
    ...dateRangeFields("Currently studying"),
    { name: "description", type: "textarea" },
    { name: "achievements", type: "array", fields: [{ name: "item", type: "textarea", required: true }] },
    { name: "institutionLogo", type: "upload", relationTo: "media" },
    displayOrderField,
  ],
};
