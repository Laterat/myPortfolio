import type { CollectionConfig } from "payload";
import { authenticated, publishedOrAuthenticated } from "../lib/payload/access";
import { createSlug } from "../lib/payload/slug";
import { displayOrderField, technologiesField } from "../lib/payload/fields";
import { revalidatePortfolio } from "../lib/payload/revalidate";

export const Projects: CollectionConfig = {
  slug: "projects",
  admin: { useAsTitle: "title", defaultColumns: ["title", "category", "featured", "displayOrder", "_status"], group: "Portfolio" },
  access: { read: publishedOrAuthenticated, create: authenticated, update: authenticated, delete: authenticated },
  hooks: {
    beforeValidate: [createSlug],
    afterChange: [({ doc }) => { revalidatePortfolio(doc.slug); return doc; }],
    afterDelete: [({ doc }) => { revalidatePortfolio(doc.slug); return doc; }],
  },
  versions: { drafts: { autosave: true, validate: true } },
  indexes: [{ fields: ["slug"] }, { fields: ["featured", "displayOrder"] }],
  fields: [
    { name: "title", type: "text", required: true, maxLength: 100 },
    { name: "slug", type: "text", required: true, unique: true, index: true, admin: { position: "sidebar", description: "Generated from the title; edit only when needed." } },
    { name: "summary", type: "textarea", required: true, maxLength: 280 },
    { name: "overview", type: "richText", required: true },
    { name: "problem", type: "textarea" },
    { name: "solution", type: "textarea" },
    { name: "role", type: "text" },
    { name: "responsibilities", type: "array", fields: [{ name: "item", type: "textarea", required: true }] },
    technologiesField,
    { name: "category", type: "text", required: true, maxLength: 60 },
    { name: "coverImage", type: "upload", relationTo: "media" },
    { name: "screenshots", type: "array", fields: [{ name: "image", type: "upload", relationTo: "media", required: true }, { name: "caption", type: "text", maxLength: 240 }] },
    { name: "githubURL", type: "text", validate: (value: string | null | undefined) => !value || /^https:\/\//i.test(value) || "Use a complete HTTPS URL." },
    { name: "liveURL", type: "text", validate: (value: string | null | undefined) => !value || /^https:\/\//i.test(value) || "Use a complete HTTPS URL." },
    { name: "featured", type: "checkbox", defaultValue: false, index: true },
    displayOrderField,
    { name: "projectDate", type: "date", admin: { date: { pickerAppearance: "monthOnly" } } },
  ],
};
