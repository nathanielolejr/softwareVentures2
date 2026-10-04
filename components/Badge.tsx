import { cn } from "@/lib/utils";

export function Tag({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-block rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-medium text-accent-dark",
        className,
      )}
      {...props}
    />
  );
}

/** Marks sample content that must be replaced before launch. */
export function PlaceholderBadge() {
  return (
    <span className="inline-block rounded-full border border-amber-300 bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-900">
      Placeholder
    </span>
  );
}
