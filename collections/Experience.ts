import type { CollectionConfig } from "payload";
import { authenticated, publishedOrAuthenticated } from "../lib/payload/access";
import { dateRangeFields, displayOrderField, technologiesField } from "../lib/payload/fields";
import { revalidatePortfolio } from "../lib/payload/revalidate";

export const Experience: CollectionConfig = {
  slug: "experience",
  admin: { useAsTitle: "position", defaultColumns: ["position", "organization", "startDate", "current", "displayOrder", "_status"], group: "Portfolio" },
  access: { read: publishedOrAuthenticated, create: authenticated, update: authenticated, delete: authenticated },
  hooks: { afterChange: [({ doc }) => { revalidatePortfolio(); return doc; }], afterDelete: [({ doc }) => { revalidatePortfolio(); return doc; }] },
  versions: { drafts: { autosave: true, validate: true } },
  indexes: [{ fields: ["displayOrder", "startDate"] }],
  fields: [
    { name: "organization", type: "text", required: true },
    { name: "position", type: "text", required: true },
    { name: "employmentType", type: "select", options: ["Full-time", "Part-time", "Contract", "Freelance", "Internship", "Other"], defaultValue: "Full-time" },
    { name: "location", type: "text" },
    ...dateRangeFields("Currently working here"),
    { name: "responsibilities", type: "array", fields: [{ name: "item", type: "textarea", required: true }] },
    { name: "achievements", type: "array", fields: [{ name: "item", type: "textarea", required: true }] },
    technologiesField,
    { name: "organizationLogo", type: "upload", relationTo: "media" },
    displayOrderField,
  ],
};
