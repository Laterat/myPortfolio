import type { CollectionConfig } from "payload";
import { adminPanelOnly, authenticated } from "../lib/payload/access";

export const Users: CollectionConfig = {
  slug: "users",
  auth: { tokenExpiration: 7200, maxLoginAttempts: 5, lockTime: 600000 },
  admin: { useAsTitle: "name", defaultColumns: ["name", "email", "updatedAt"] },
  access: {
    admin: adminPanelOnly,
    create: authenticated,
    read: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  fields: [{ name: "name", type: "text", required: true }],
};
