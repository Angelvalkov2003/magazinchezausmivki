"use client";

import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

export default function OpenCart({
  className,
  quantity,
}: {
  className?: string;
  quantity?: number;
}) {
  const [bump, setBump] = useState(false);
  const prevQuantityRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    // Skip first render to avoid animating on initial load/hydration.
    if (prevQuantityRef.current === undefined) {
      prevQuantityRef.current = quantity;
      return;
    }

    if (quantity !== prevQuantityRef.current) {
      prevQuantityRef.current = quantity;
      setBump(true);
      const t = window.setTimeout(() => setBump(false), 320);
      return () => window.clearTimeout(t);
    }
  }, [quantity]);

  return (
    <div
      className={clsx(
        "relative flex h-10 w-10 items-center justify-center rounded-md border border-black/40 text-black transition-colors",
        bump && "animate-bump",
      )}
    >
      <ShoppingCartIcon
        className={clsx(
          "h-4 transition-all ease-in-out hover:scale-110",
          className,
        )}
      />

      {quantity ? (
        <div
          className={clsx(
            "absolute right-0 top-0 -mr-2 -mt-2 h-4 w-4 rounded-full bg-mustard text-[11px] font-medium text-black",
            bump && "animate-bump",
          )}
        >
          {quantity}
        </div>
      ) : null}
    </div>
  );
}
