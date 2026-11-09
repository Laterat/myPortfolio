import type { GlobalConfig } from "payload";
import { authenticated } from "../lib/payload/access";
import { revalidatePortfolio } from "../lib/payload/revalidate";

export const SiteSettings: GlobalConfig = {
  slug: "site-settings",
  label: "Site Settings",
  admin: { group: "Portfolio" },
  access: { read: () => true, update: authenticated },
  hooks: { afterChange: [({ doc }) => { revalidatePortfolio(); return doc; }] },
  versions: { drafts: { autosave: true, validate: true } },
  fields: [
    { name: "identity", type: "group", fields: [
      { name: "fullName", type: "text", required: true, defaultValue: "Latera Mekonnen" },
      { name: "professionalTitle", type: "text", required: true, defaultValue: "Software Developer" },
      { name: "introduction", type: "textarea", maxLength: 300 },
      { name: "aboutDescription", type: "textarea" },
      { name: "location", type: "text", defaultValue: "Addis Ababa" },
      { name: "profileImage", type: "upload", relationTo: "media" },
      { name: "availability", type: "select", options: [{ label: "Not specified", value: "unspecified" }, { label: "Open to opportunities", value: "open" }, { label: "Unavailable", value: "unavailable" }], defaultValue: "unspecified" },
      { name: "contactEmail", type: "email" },
      { name: "resume", type: "upload", relationTo: "media" },
    ] },
    { name: "seo", type: "group", fields: [
      { name: "title", type: "text", defaultValue: "Latera Mekonnen | Software Developer" },
      { name: "description", type: "textarea", maxLength: 300, defaultValue: "Portfolio of Latera Mekonnen, a product-minded software developer building clear, reliable web experiences." },
    ] },
    { name: "socialLinks", type: "array", fields: [
      { name: "platform", type: "text", required: true },
      { name: "url", type: "text", required: true, validate: (value: string | null | undefined) => /^https:\/\//i.test(value || "") || "Use a complete HTTPS URL." },
    ] },
    { name: "footerInformation", type: "textarea", maxLength: 280, defaultValue: "Product-minded software engineering for useful, considered web experiences." },
  ],
};
