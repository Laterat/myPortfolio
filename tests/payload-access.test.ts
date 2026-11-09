import assert from "node:assert/strict";
import test from "node:test";
import { authenticated, publishedOrAuthenticated } from "../lib/payload/access";
import { toSlug } from "../lib/payload/slug";

test("slug generation normalizes case, accents, and punctuation", () => {
  assert.equal(toSlug("Café — Clear Interfaces!"), "cafe-clear-interfaces");
  assert.equal(toSlug("  API & Data  "), "api-data");
});

test("content writes require an authenticated administrator", () => {
  const anonymous = { req: { user: null } } as unknown as Parameters<typeof authenticated>[0];
  const administrator = { req: { user: { id: 1 } } } as unknown as Parameters<typeof authenticated>[0];
  assert.equal(authenticated(anonymous), false);
  assert.equal(authenticated(administrator), true);
});

test("public content reads are constrained to published documents", () => {
  const anonymous = { req: { user: null } } as unknown as Parameters<typeof publishedOrAuthenticated>[0];
  const administrator = { req: { user: { id: 1 } } } as unknown as Parameters<typeof publishedOrAuthenticated>[0];
  assert.deepEqual(publishedOrAuthenticated(anonymous), { _status: { equals: "published" } });
  assert.equal(publishedOrAuthenticated(administrator), true);
});
