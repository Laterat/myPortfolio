import Image from "next/image";
import type { PortfolioImage as PortfolioImageData } from "@/lib/content";

export default function PortfolioImage({ asset, className, priority = false }: { asset: PortfolioImageData; className?: string; priority?: boolean }) {
  return <Image
    src={asset.src}
    alt={asset.alt}
    width={asset.width || 1200}
    height={asset.height || 800}
    sizes="(max-width: 768px) 100vw, 60vw"
    unoptimized
    priority={priority}
    className={className}
  />;
}
