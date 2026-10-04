import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = Omit<React.ComponentProps<typeof Link>, "href"> & {
  href: string;
  variant?: "primary" | "secondary";
  size?: "md" | "sm";
};

export function ButtonLink({ href, variant = "primary", size = "md", className, ...props }: Props) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-lg font-medium whitespace-nowrap transition-colors",
        size === "md" ? "px-5 py-3 text-base" : "px-3 py-2 text-sm sm:px-3.5",
        variant === "primary"
          ? "bg-accent hover:bg-accent-dark text-white"
          : "border-line text-ink hover:bg-surface border bg-white",
        className,
      )}
      {...props}
    />
  );
}
