import type { CollectionConfig } from "payload";
import { authenticated, publishedOrAuthenticated } from "../lib/payload/access";
import { displayOrderField } from "../lib/payload/fields";
import { revalidatePortfolio } from "../lib/payload/revalidate";

export const Certificates: CollectionConfig = {
  slug: "certificates",
  admin: { useAsTitle: "title", defaultColumns: ["title", "issuer", "issueDate", "featured", "displayOrder", "_status"], group: "Portfolio" },
  access: { read: publishedOrAuthenticated, create: authenticated, update: authenticated, delete: authenticated },
  hooks: { afterChange: [({ doc }) => { revalidatePortfolio(); return doc; }], afterDelete: [({ doc }) => { revalidatePortfolio(); return doc; }] },
  versions: { drafts: { autosave: true, validate: true } },
  indexes: [{ fields: ["featured", "displayOrder"] }],
  fields: [
    { name: "title", type: "text", required: true },
    { name: "issuer", type: "text", required: true },
    { name: "credentialID", type: "text" },
    { name: "issueDate", type: "date", required: true, admin: { date: { pickerAppearance: "monthOnly" } } },
    { name: "expirationDate", type: "date", admin: { date: { pickerAppearance: "monthOnly" } } },
    { name: "verificationURL", type: "text", validate: (value: string | null | undefined) => !value || /^https:\/\//i.test(value) || "Use a complete HTTPS URL." },
    { name: "credentialFile", type: "upload", relationTo: "media" },
    { name: "skills", type: "array", fields: [{ name: "name", type: "text", required: true }] },
    { name: "featured", type: "checkbox", defaultValue: false, index: true },
    displayOrderField,
  ],
};
