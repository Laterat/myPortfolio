import path from "node:path";
import { fileURLToPath } from "node:url";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { s3Storage } from "@payloadcms/storage-s3";
import { buildConfig } from "payload";
import { Certificates } from "./collections/Certificates";
import { Education } from "./collections/Education";
import { Experience } from "./collections/Experience";
import { Media } from "./collections/Media";
import { Projects } from "./collections/Projects";
import { Skills } from "./collections/Skills";
import { Users } from "./collections/Users";
import { SiteSettings } from "./globals/SiteSettings";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const productionRuntime = process.env.NODE_ENV === "production" && process.env.NEXT_PHASE !== "phase-production-build";
const requiredProductionSettings = ["DATABASE_URI", "PAYLOAD_SECRET", "S3_BUCKET", "S3_ACCESS_KEY_ID", "S3_SECRET_ACCESS_KEY"];
const missingProductionSettings = requiredProductionSettings.filter((name) => !process.env[name]);

if (productionRuntime && missingProductionSettings.length) {
  throw new Error(`Missing production CMS configuration: ${missingProductionSettings.join(", ")}`);
}
if (productionRuntime && (process.env.PAYLOAD_SECRET?.length ?? 0) < 32) {
  throw new Error("PAYLOAD_SECRET must contain at least 32 characters in production.");
}

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET ?? "",
  admin: {
    user: Users.slug,
    theme: "light",
    meta: { titleSuffix: " | Latera Mekonnen CMS" },
  },
  collections: [Users, Media, Projects, Experience, Education, Certificates, Skills],
  globals: [SiteSettings],
  editor: lexicalEditor(),
  db: postgresAdapter({
    pool: { connectionString: process.env.DATABASE_URI ?? "" },
    migrationDir: path.resolve(dirname, "migrations"),
  }),
  upload: { requestSizeLimit: 12_000_000, responseOnLimit: "Media uploads must be 10 MB or smaller." },
  plugins: [s3Storage({
    enabled: Boolean(process.env.S3_BUCKET),
    bucket: process.env.S3_BUCKET ?? "",
    collections: { media: { prefix: "portfolio" } },
    config: {
      credentials: {
        accessKeyId: process.env.S3_ACCESS_KEY_ID ?? "",
        secretAccessKey: process.env.S3_SECRET_ACCESS_KEY ?? "",
      },
      region: process.env.S3_REGION ?? "us-east-1",
      ...(process.env.S3_ENDPOINT ? { endpoint: process.env.S3_ENDPOINT, forcePathStyle: true } : {}),
    },
  })],
  typescript: { outputFile: path.resolve(dirname, "payload-types.ts") },
});
