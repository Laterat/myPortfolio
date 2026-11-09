import type { CollectionConfig } from "payload";
import { authenticated, publishedOrAuthenticated } from "../lib/payload/access";
import { displayOrderField } from "../lib/payload/fields";
import { revalidatePortfolio } from "../lib/payload/revalidate";

export const Skills: CollectionConfig = {
  slug: "skills",
  admin: { useAsTitle: "name", defaultColumns: ["name", "category", "visible", "displayOrder", "_status"], group: "Portfolio" },
  access: { read: publishedOrAuthenticated, create: authenticated, update: authenticated, delete: authenticated },
  hooks: { afterChange: [({ doc }) => { revalidatePortfolio(); return doc; }], afterDelete: [({ doc }) => { revalidatePortfolio(); return doc; }] },
  versions: { drafts: { autosave: true, validate: true } },
  indexes: [{ fields: ["category", "displayOrder"] }],
  fields: [
    { name: "name", type: "text", required: true, unique: true },
    { name: "category", type: "select", required: true, options: ["Languages", "Frontend", "Backend", "Databases", "Infrastructure", "Tools"] },
    { name: "description", type: "textarea", maxLength: 240 },
    { name: "icon", type: "upload", relationTo: "media" },
    { name: "visible", type: "checkbox", defaultValue: true, index: true },
    displayOrderField,
  ],
};
