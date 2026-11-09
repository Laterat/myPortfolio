import { getPayloadClient } from "./client";

export type MediaAsset = { url?: string | null; alt?: string | null; width?: number | null; height?: number | null; sizes?: { card?: MediaAsset } };
export type Project = {
  id: string | number;
  title: string;
  slug: string;
  summary: string;
  category: string;
  featured?: boolean;
  coverImage?: MediaAsset | number | null;
  technologies?: Array<{ name?: string }>;
  githubURL?: string;
  liveURL?: string;
  overview?: Record<string, unknown>;
  problem?: string;
  solution?: string;
  role?: string;
  responsibilities?: Array<{ item?: string }>;
  screenshots?: Array<{ image?: MediaAsset | number; caption?: string }>;
  projectDate?: string;
};

export type ExperienceItem = {
  id: string | number;
  organization: string;
  position: string;
  employmentType?: string;
  location?: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  responsibilities?: Array<{ item?: string }>;
  achievements?: Array<{ item?: string }>;
  technologies?: Array<{ name?: string }>;
  organizationLogo?: MediaAsset | number | null;
};

export type EducationItem = {
  id: string | number;
  institution: string;
  qualification: string;
  fieldOfStudy?: string;
  location?: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  description?: string;
  achievements?: Array<{ item?: string }>;
  institutionLogo?: MediaAsset | number | null;
};

export type Certificate = {
  id: string | number;
  title: string;
  issuer: string;
  credentialID?: string;
  issueDate: string;
  expirationDate?: string;
  verificationURL?: string;
  skills?: Array<{ name?: string }>;
  credentialFile?: MediaAsset | number | null;
};

export type Skill = { id: string | number; name: string; category: string; description?: string; visible?: boolean };

export type SiteSettings = {
  identity?: {
    fullName?: string;
    professionalTitle?: string;
    introduction?: string;
    aboutDescription?: string;
    location?: string;
    profileImage?: MediaAsset | number | null;
    availability?: string;
    contactEmail?: string;
    resume?: MediaAsset | number | null;
  };
  seo?: { title?: string; description?: string };
  socialLinks?: Array<{ platform: string; url: string }>;
  footerInformation?: string;
};

async function findPublished<T extends { id: string | number }>(collection: string, sort = "displayOrder") {
  const payload = await getPayloadClient();
  if (!payload) return [] as T[];
  const result = await payload.find({
    collection,
    where: { _status: { equals: "published" } },
    sort,
    limit: 100,
    depth: 1,
    overrideAccess: false,
  });
  return result.docs as T[];
}

export const getProjects = () => findPublished<Project>("projects", "displayOrder");
export async function getProjectBySlug(slug: string) {
  const payload = await getPayloadClient();
  if (!payload) return null;
  const result = await payload.find({
    collection: "projects",
    where: { and: [{ slug: { equals: slug } }, { _status: { equals: "published" } }] },
    limit: 1,
    depth: 2,
    overrideAccess: false,
  });
  return (result.docs[0] as Project | undefined) ?? null;
}
export const getExperience = () => findPublished<ExperienceItem>("experience", "-startDate");
export const getEducation = () => findPublished<EducationItem>("education", "-startDate");
export const getCertificates = () => findPublished<Certificate>("certificates", "-issueDate");

export async function getSkills() {
  const payload = await getPayloadClient();
  if (!payload) return [] as Skill[];
  const result = await payload.find({
    collection: "skills",
    where: { and: [{ _status: { equals: "published" } }, { visible: { equals: true } }] },
    sort: "displayOrder",
    limit: 100,
    depth: 0,
    overrideAccess: false,
  });
  return result.docs as Skill[];
}

export async function getSiteSettings() {
  const payload = await getPayloadClient();
  if (!payload) return null;
  return (await payload.findGlobal({ slug: "site-settings", depth: 1, overrideAccess: false })) as SiteSettings;
}
