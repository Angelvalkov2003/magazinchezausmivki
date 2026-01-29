import clsx from "clsx";
import Image from "next/image";

export default function LogoSquare({
  size,
}: {
  size?: "sm" | "md" | "lg" | undefined;
}) {
  const px = size === "sm" ? 30 : size === "md" ? 80 : size === "lg" ? 160 : 120;

  return (
    <div
      className={clsx(
        "flex flex-none items-center justify-center overflow-hidden rounded-xl",
        {
          "h-[120px] w-[120px]": !size,
          "h-[30px] w-[30px] rounded-lg": size === "sm",
          "h-[80px] w-[80px] rounded-xl": size === "md",
          "h-[160px] w-[160px]": size === "lg",
        },
      )}
    >
      <Image
        src="/logo_usmivka_final.png"
        alt="Магазинче за усмивки"
        width={px}
        height={px}
        className="object-contain"
        priority
      />
    </div>
  );
}
