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
        header
          ? "h-[6.6rem] -my-[1.45rem] sm:h-[9.13rem] sm:-my-[2.02rem] lg:h-[15.07rem] lg:-my-[3.34rem] xl:h-[16.5rem] xl:-my-[3.65rem]"
          : "h-[7rem] sm:h-[10rem] lg:h-[19.2rem] xl:h-[22.08rem]",
        className,
      )}
    />
  );
}
