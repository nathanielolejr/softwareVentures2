import Image from "next/image";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

/** Logo mark plus live wordmark (Barlow Condensed, matching the brand lockup). */
export function Logo({ className, size = 32 }: { className?: string; size?: number }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5 sm:gap-3", className)}>
      <Image src={site.logo.mark} alt="" width={size} height={size} priority />
      <span className="font-brand text-ink text-[1.05rem] leading-[1.05] font-semibold tracking-[0.06em] uppercase sm:text-xl sm:whitespace-nowrap">
        {site.name}
      </span>
    </span>
  );
}
