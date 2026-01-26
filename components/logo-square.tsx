import clsx from "clsx";
import Image from "next/image";

export default function LogoSquare({ size }: { size?: "sm" | "lg" | undefined }) {
  return (
    <div
      className={clsx(
        "flex flex-none items-center justify-center overflow-hidden rounded-xl",
        {
          "h-[120px] w-[120px]": !size,
          "h-[30px] w-[30px] rounded-lg": size === "sm",
          "h-[160px] w-[160px]": size === "lg",
        },
      )}
    >
      <Image
        src="/logo_usmivka_final.png"
        alt="Магазинче за усмивки"
        width={size === "sm" ? 30 : size === "lg" ? 160 : 120}
        height={size === "sm" ? 30 : size === "lg" ? 160 : 120}
        className="object-contain"
        priority
      />
    </div>
  );
}
