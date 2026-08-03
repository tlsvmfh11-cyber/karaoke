import Link from "next/link";
import { PhoneCall } from "lucide-react";
import { PHONE_TEL } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CallButton({
  label,
  variant = "gold",
  size = "lg",
  className,
}: {
  label: string;
  variant?: "gold" | "outline" | "bordeaux" | "ghost";
  size?: "default" | "lg" | "sm";
  className?: string;
}) {
  return (
    <Link
      href={PHONE_TEL}
      className={cn(buttonVariants({ variant, size }), className)}
      aria-label={label}
    >
      <PhoneCall className="h-4 w-4" aria-hidden />
      <span>{label}</span>
    </Link>
  );
}

export function FloatingCall() {
  return (
    <Link
      href={PHONE_TEL}
      aria-label="담당 실장 다이렉트 연결"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-b from-champagne-bright to-champagne-deep text-obsidian shadow-gold animate-pulse-gold md:hidden"
    >
      <PhoneCall className="h-7 w-7" aria-hidden />
    </Link>
  );
}
