import type { CollectionBeforeOperationHook, CollectionConfig } from "payload";
import { authenticated } from "../lib/payload/access";

const enforceFileLimit: CollectionBeforeOperationHook = ({ req }) => {
  if (req.file && req.file.size > 10_000_000) throw new Error("Media uploads must be 10 MB or smaller.");
};

export const Media: CollectionConfig = {
  slug: "media",
  upload: {
    staticDir: `${process.cwd()}/media`,
    mimeTypes: ["image/jpeg", "image/png", "image/webp", "image/avif", "application/pdf"],
    imageSizes: [{ name: "card", width: 1440, height: 960, position: "centre" }],
  },
  admin: { useAsTitle: "alt", defaultColumns: ["alt", "filename", "isPublic", "updatedAt"], group: "Portfolio" },
  access: {
    create: authenticated,
    update: authenticated,
    delete: authenticated,
    read: ({ req }) => req.user ? true : { isPublic: { equals: true } },
  },
  hooks: { beforeOperation: [enforceFileLimit] },
  fields: [
    { name: "alt", type: "text", required: true, maxLength: 220 },
    { name: "caption", type: "text", maxLength: 300 },
    { name: "isPublic", type: "checkbox", defaultValue: false, access: { update: ({ req }) => Boolean(req.user) }, admin: { description: "Allow this asset to be served on public portfolio pages." } },
  ],
};
