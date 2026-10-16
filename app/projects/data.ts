import type { ProjectItem } from "@/interfaces/product";

export const projectsData: ProjectItem[] = [
  {
    title: "Atlas CRM",
    slug: "atlas-crm",
    category: "B2B SaaS",
    summary:
      "A sales workflow platform with lead tracking, automation, and analytics dashboards for growing teams.",
    description:
      "I designed the product experience around faster pipeline reviews, cleaner data entry, and reliable reporting flows.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "UX"],
    focus: "Pipeline visibility and dependable reporting",
    role: "Product experience and engineering",
  },
  {
    title: "SignalOps",
    slug: "signalops",
    category: "Operations dashboard",
    summary:
      "A monitoring and reporting tool built to streamline internal operations, reduce downtime, and improve visibility.",
    description:
      "The interface focused on clarity, rapid status checks, and a more dependable operational workflow for teams under pressure.",
    tags: ["React", "Node.js", "Charts", "Realtime"],
    focus: "Fast operational awareness under pressure",
    role: "Interface and workflow design",
  },
  {
    title: "Northstar Commerce",
    slug: "northstar-commerce",
    category: "E-commerce experience",
    summary:
      "A conversion-focused storefront with performance improvements, streamlined checkout flow, and a cleaner product experience.",
    description:
      "The experience was tuned for faster browsing, better trust signals, and thoughtful product storytelling across devices.",
    tags: ["Next.js", "Tailwind", "UX", "Performance"],
    focus: "A faster, clearer path to product discovery",
    role: "Frontend product development",
  },
];
