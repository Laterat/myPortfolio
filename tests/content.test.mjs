import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const contentURL = new URL("../content/portfolio.json", import.meta.url);
const content = JSON.parse(await readFile(contentURL, "utf8"));
const schema = JSON.parse(await readFile(new URL("../content/portfolio.schema.json", import.meta.url), "utf8"));

test("portfolio JSON contains the site sections and editable content lists", () => {
  assert.equal(content.$schema, "./portfolio.schema.json");
  assert.equal(schema.$schema, "https://json-schema.org/draft/2020-12/schema");
  assert.equal(typeof content.site.title, "string");
  assert.equal(typeof content.identity.fullName, "string");
  assert.ok(Array.isArray(content.navigation.sections));
  for (const section of ["projects", "experience", "education", "certificates", "skills", "socialLinks"]) {
    assert.ok(Array.isArray(content[section]), `${section} should be an array`);
  }
});

test("navigation section IDs are unique", () => {
  const ids = content.navigation.sections.map(({ id }) => id);
  assert.equal(new Set(ids).size, ids.length);
});

test("project slugs are unique and URL-safe", () => {
  const slugs = content.projects.map(({ slug }) => slug);
  assert.equal(new Set(slugs).size, slugs.length);
  for (const slug of slugs) assert.match(slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
});
