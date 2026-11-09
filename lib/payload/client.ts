import { getPayload } from "payload";
import config from "@payload-config";

const configured = Boolean(process.env.DATABASE_URI && process.env.PAYLOAD_SECRET);
let payloadPromise: ReturnType<typeof getPayload> | undefined;

export async function getPayloadClient() {
  if (!configured) return null;
  payloadPromise ??= getPayload({ config });
  return payloadPromise;
}
