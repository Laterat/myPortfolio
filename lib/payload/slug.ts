import type { CollectionBeforeValidateHook } from "payload";

export function toSlug(value: string) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export const createSlug: CollectionBeforeValidateHook = ({ data }) => {
  if (data?.title && !data.slug) data.slug = toSlug(data.title);
  return data;
};
