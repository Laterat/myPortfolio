import Image from "next/image";
import type { MediaAsset } from "@/lib/payload/content";

const passThroughLoader = ({ src }: { src: string }) => src;

export default function PayloadImage({ asset, alt, className, priority = false }: { asset: MediaAsset; alt?: string; className?: string; priority?: boolean }) {
  if (!asset.url) return null;
  return <Image
    loader={passThroughLoader}
    unoptimized
    src={asset.url}
    alt={alt ?? asset.alt ?? ""}
    width={asset.width || 1200}
    height={asset.height || 800}
    sizes="(max-width: 768px) 100vw, 60vw"
    priority={priority}
    className={className}
  />;
}
