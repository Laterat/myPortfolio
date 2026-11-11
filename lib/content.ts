import rawContent from "@/content/portfolio.json";

export type PortfolioImage = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  projectDate?: string;
  role?: string;
  technologies?: string[];
  coverImage?: PortfolioImage | null;
  overview?: string[];
  problem?: string;
  solution?: string;
  responsibilities?: string[];
  screenshots?: Array<PortfolioImage & { caption?: string }>;
  liveURL?: string;
  githubURL?: string;
};

export type PortfolioContent = {
  site: {
    name: string;
    title: string;
    description: string;
    canonicalUrl: string;
    language: string;
    themeColor: string;
    keywords: string[];
  };
  identity: {
    fullName: string;
    nameLines: string[];
    professionalTitle: string;
    introduction: string;
    location: string;
    availability: { open: boolean; label: string };
    contactEmail: string;
    resumeUrl: string;
    profileImage: PortfolioImage | null;
  };
  navigation: {
    sections: Array<{ id: string; label: string }>;
    shortcutHint: string;
    shortcutKey: string;
    shortcutLabel: string;
    openButton: string;
    localTimeLabel: string;
    localTimeSuffix: string;
    timeZone: string;
    timeLocale: string;
  };
  commandPalette: {
    title: string;
    searchLabel: string;
    placeholder: string;
    closeLabel: string;
    emptyMessage: string;
    footerHint: string;
  };
  copy: {
    labels: Record<string, string>;
    sections: Record<string, string>;
    empty: Record<string, string>;
    contactIntro: string;
    emailCopied: string;
    emailCopyFailed: string;
    emailCopyHint: string;
    openMailApp: string;
    copyright: string;
  };
  socialLinks: Array<{ platform: string; url: string }>;
  projects: Project[];
  experience: Array<{
    position: string;
    organization: string;
    location?: string;
    startDate: string;
    endDate?: string;
    current?: boolean;
    responsibilities?: string[];
    achievements?: string[];
  }>;
  education: Array<{
    qualification: string;
    fieldOfStudy?: string;
    institution: string;
    location?: string;
    startDate: string;
    endDate?: string;
    current?: boolean;
    description?: string;
    achievements?: string[];
  }>;
  certificates: Array<{
    title: string;
    issuer: string;
    issueDate: string;
    credentialID?: string;
    verificationURL?: string;
    credentialFile?: string;
  }>;
  skills: Array<{ name: string; category: string }>;
};

export const portfolioContent = rawContent as PortfolioContent;
