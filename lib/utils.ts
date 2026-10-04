export function cn(...parts: (string | false | null | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}

export function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en", { year: "numeric", month: "short", day: "numeric" }).format(
    new Date(iso),
  );
}

export function formatCount(n: number) {
  return new Intl.NumberFormat("en", { notation: "compact" }).format(n);
}

export function absoluteUrl(path = "/", base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000") {
  return new URL(path, base).toString();
}
