import clsx from "clsx";
import Image from "next/image";

export default function LogoSquare({ size }: { size?: "sm" | undefined }) {
  return (
    <div
      className={clsx(
        "flex flex-none items-center justify-center overflow-hidden",
        {
          "h-[120px] w-[120px] rounded-xl": !size,
          "h-[30px] w-[30px] rounded-lg": size === "sm",
        },
      )}
    >
      <Image
        src="/logo_usmivka.png"
        alt="Магазинче за усмивки"
        width={size === "sm" ? 30 : 120}
        height={size === "sm" ? 30 : 120}
        className="object-contain"
        priority
      />
    </div>
  );
}
