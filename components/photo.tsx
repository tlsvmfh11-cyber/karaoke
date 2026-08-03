import Image from "next/image";
import { cn } from "@/lib/utils";

const ASPECTS = {
  banner: "aspect-[21/9]",
  wide: "aspect-[16/9]",
  standard: "aspect-[4/3]",
  tall: "aspect-[3/4]",
} as const;

export function Photo({
  src,
  alt,
  aspect = "wide",
  priority = false,
  position = "center 22%",
  className,
}: {
  src: string;
  alt: string;
  aspect?: keyof typeof ASPECTS;
  priority?: boolean;
  position?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group relative w-full overflow-hidden rounded-2xl border border-obsidian-line/80 shadow-glass",
        ASPECTS[aspect],
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 896px"
        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        style={{ objectPosition: position }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-obsidian/50 via-transparent to-obsidian/10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gold-line opacity-60"
      />
    </div>
  );
}

export function PhotoGrid({ children }: { children: React.ReactNode }) {
  return <div className="my-10 grid gap-5 md:grid-cols-2">{children}</div>;
}
