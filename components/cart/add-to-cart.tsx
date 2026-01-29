"use client";

import { CheckIcon, PlusIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { addItem } from "components/cart/actions";
import { Product } from "lib/types";
import { useActionState, useEffect, useState } from "react";
import { useCart } from "./cart-context";

function SubmitButton({
  available,
  isSubmitting,
  justAdded,
}: {
  available: boolean;
  isSubmitting: boolean;
  justAdded: boolean;
}) {
  const buttonClasses =
    "relative flex w-full items-center justify-center rounded-full bg-mustard p-4 tracking-wide text-white transition-all duration-200 active:scale-[0.98]";
  const disabledClasses = "cursor-not-allowed opacity-60 hover:opacity-60";

  if (!available) {
    return (
      <button disabled className={clsx(buttonClasses, disabledClasses)}>
        Изчерпан
      </button>
    );
  }

  return (
    <button
      aria-label="Добави в количка"
      disabled={isSubmitting}
      className={clsx(
        buttonClasses,
        "hover:opacity-90",
        isSubmitting && disabledClasses,
        justAdded && "bg-sage animate-bump",
      )}
    >
      <div className="absolute left-0 ml-4">
        {justAdded ? (
          <CheckIcon className="h-5" />
        ) : (
          <PlusIcon className="h-5" />
        )}
      </div>
      {justAdded
        ? "Добавено"
        : isSubmitting
          ? "Добавяне..."
          : "Добави в Количка"}
    </button>
  );
}

export function AddToCart({ product }: { product: Product }) {
  const { available } = product;
  const { addCartItem } = useCart();
  const [message, formAction] = useActionState(addItem, null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  useEffect(() => {
    if (!justAdded) return;
    const t = window.setTimeout(() => setJustAdded(false), 1200);
    return () => window.clearTimeout(t);
  }, [justAdded]);

  // Create a simple variant-like object for compatibility with cart
  // Since products don't have variants anymore, we create a default variant
  const variantData = {
    id: product.id,
    title: product.title,
    price: product.price,
    available: product.available,
    selectedOptions: [],
  };

  return (
    <form
      action={async () => {
        if (isSubmitting) return;

        setIsSubmitting(true);
        try {
          addCartItem(variantData, product);
          await formAction({
            productId: product.id,
            variantId: product.id,
            price: product.price,
          });
          setJustAdded(true);
        } finally {
          setIsSubmitting(false);
        }
      }}
    >
      <SubmitButton
        available={available}
        isSubmitting={isSubmitting}
        justAdded={justAdded}
      />
      <p aria-live="polite" className="sr-only" role="status">
        {message}
      </p>
    </form>
  );
}
