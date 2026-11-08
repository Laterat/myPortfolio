import { getPayload } from "payload";
import { loadEnvConfig } from "@next/env";

loadEnvConfig(process.cwd());

const { default: config } = await import("../payload.config");

const name = process.env.CMS_ADMIN_NAME?.trim();
const email = process.env.CMS_ADMIN_EMAIL?.trim().toLowerCase();
const password = process.env.CMS_ADMIN_PASSWORD;

if (!name || !email || !password || password.length < 16) {
  throw new Error("Set CMS_ADMIN_NAME, CMS_ADMIN_EMAIL, and a CMS_ADMIN_PASSWORD of at least 16 characters before running this command.");
}

const payload = await getPayload({ config });
try {
  const { totalDocs } = await payload.count({ collection: "users", overrideAccess: true });
  if (totalDocs > 0) throw new Error("An administrator already exists. This command only creates the first administrator.");
  await payload.create({
    collection: "users",
    data: { name, email, password },
    overrideAccess: true,
  });
  console.info(`Created the initial administrator account for ${email}.`);
} finally {
  await payload.destroy();
}
