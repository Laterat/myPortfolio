import config from "@payload-config";
import { RootPage, generatePageMetadata } from "@payloadcms/next/views";
import { importMap } from "../importMap.js";

type Props = {
  params: Promise<{ segments: string[] }>;
  searchParams: Promise<{ [key: string]: string | string[] }>;
};

export default function AdminPage({ params, searchParams }: Props) {
  return RootPage({ config, importMap, params, searchParams });
}

export async function generateMetadata({ params, searchParams }: Props) {
  return {
    ...(await generatePageMetadata({ config, params, searchParams })),
    robots: { index: false, follow: false },
  };
}
