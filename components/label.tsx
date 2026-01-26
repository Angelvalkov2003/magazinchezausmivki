import clsx from "clsx";
import Price from "./price";

const Label = ({
  title,
  amount,
  compareAtAmount,
  currencyCode,
  position = "bottom",
  split = false,
}: {
  title: string;
  amount: string;
  compareAtAmount?: string;
  currencyCode: string;
  position?: "bottom" | "center" | "top";
  split?: boolean;
}) => {
  const hasComparePrice = compareAtAmount && parseFloat(compareAtAmount) > parseFloat(amount);
  
  // Split mode: title on top, price on bottom, both centered
  if (split) {
    return (
      <>
        {/* Title at top, centered */}
        <div className="absolute top-0 left-0 flex w-full justify-center px-4 pt-4 z-10">
          <div className="rounded-full border bg-white/70 px-4 py-1.5 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
            <h3 className="whitespace-nowrap leading-none tracking-tight">
              {title}
            </h3>
          </div>
        </div>
        {/* Price at bottom, centered */}
        <div className="absolute bottom-0 left-0 flex w-full justify-center px-4 pb-4 z-10">
          <div className="rounded-full bg-light-sage dark:bg-sage px-3 py-1.5 text-gray-900 dark:text-white text-[10px] font-semibold">
            {hasComparePrice ? (
              <div className="flex items-center gap-1.5 flex-wrap justify-center">
                <span className="text-red-600 dark:text-red-400 line-through text-[9px] whitespace-nowrap">
                  <Price
                    amount={compareAtAmount}
                    currencyCode={currencyCode}
                    currencyCodeClassName="hidden"
                    showBgn={false}
                  />
                </span>
                <Price
                  amount={amount}
                  currencyCode={currencyCode}
                  currencyCodeClassName="hidden"
                  showBgn={true}
                />
              </div>
            ) : (
              <Price
                amount={amount}
                currencyCode={currencyCode}
                currencyCodeClassName="hidden"
                showBgn={true}
              />
            )}
          </div>
        </div>
      </>
    );
  }
  
  // Original combined mode
  return (
    <div
      className={clsx(
        "absolute left-0 flex w-full px-4 @container/label",
        {
          "bottom-0 pb-4": position === "bottom",
          "top-0 pt-4": position === "top",
          "bottom-0 lg:px-20 lg:pb-[35%]": position === "center",
        },
      )}
    >
      <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
        <h3 className="mr-2 line-clamp-2 grow pl-2 leading-none tracking-tight min-w-0">
          {title}
        </h3>
        <div className="flex-none rounded-full bg-light-sage dark:bg-sage px-1.5 py-0.5 text-gray-900 dark:text-white text-[10px]">
          {hasComparePrice ? (
            <div className="flex items-center gap-0.5 flex-wrap">
              <span className="text-red-600 dark:text-red-400 line-through text-[9px] whitespace-nowrap">
                <Price
                  amount={compareAtAmount}
                  currencyCode={currencyCode}
                  currencyCodeClassName="hidden"
                  showBgn={false}
                />
              </span>
              <Price
                amount={amount}
                currencyCode={currencyCode}
                currencyCodeClassName="hidden @[275px]/label:inline"
                showBgn={true}
              />
            </div>
          ) : (
            <Price
              amount={amount}
              currencyCode={currencyCode}
              currencyCodeClassName="hidden @[275px]/label:inline"
              showBgn={true}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Label;
