import Image from "next/image";

import { cn } from "@/lib/utils";

type LogoImageProps = {
  size?: "header" | "footer";
  className?: string;
};

export function LogoImage({ size = "header", className }: LogoImageProps) {
  const header = size === "header";

  return (
    <Image
      src="/brand/corentis-logo-dark.png"
      alt="Corentis"
      width={2220}
      height={660}
      priority={header}
      className={cn(
        "w-auto object-contain",
        header ? "h-[4.6rem] sm:h-[6.4rem] lg:h-[10.5rem] xl:h-[11.5rem]" : "h-[7rem] sm:h-[10rem] lg:h-[19.2rem] xl:h-[22.08rem]",
        className,
      )}
    />
  );
}
