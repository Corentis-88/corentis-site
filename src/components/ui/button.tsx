import Link from "next/link";
import { type ButtonHTMLAttributes, type ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  type?: "button" | "submit";
  onClick?: () => void;
} & Pick<ButtonHTMLAttributes<HTMLButtonElement>, "disabled">;

const variants = {
  primary:
    "bg-[linear-gradient(135deg,var(--color-cobalt),var(--color-electric))] text-[var(--color-near-white)] shadow-[0_20px_60px_rgba(73,166,255,0.22)] hover:brightness-110 hover:shadow-[0_24px_80px_rgba(73,166,255,0.3)]",
  secondary:
    "border border-[rgba(26,49,95,0.95)] bg-[rgba(10,30,70,0.55)] text-[var(--color-near-white)] hover:border-[rgba(73,166,255,0.4)] hover:bg-[rgba(10,30,70,0.72)]",
  ghost: "text-[var(--color-steel)] hover:text-[var(--color-near-white)]",
};

const base =
  "inline-flex min-h-12 items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-[0.01em] transition duration-300 disabled:cursor-not-allowed disabled:opacity-60";

export function Button({
  children,
  className,
  href,
  variant = "primary",
  type = "button",
  onClick,
  disabled,
}: ButtonProps) {
  const styles = cn(base, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={styles} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={styles} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
