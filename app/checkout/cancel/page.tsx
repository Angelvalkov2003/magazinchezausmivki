import Link from "next/link";

export default function CheckoutCancelPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-6">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-peach dark:bg-peach/30">
            <svg
              className="h-8 w-8 text-mustard dark:text-mustard"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
        <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
          Плащането е отменено
        </h1>
        <p className="mb-8 text-lg text-stone-400 dark:text-stone-400">
          Вашата поръчка не е завършена. Можете да опитате отново по-късно.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="rounded-lg bg-mustard px-6 py-3 text-white hover:opacity-90 transition-colors"
          >
            Към началната страница
          </Link>
          <Link
            href="/search"
            className="rounded-lg border border-sage px-6 py-3 text-stone-400 hover:bg-light-sage dark:border-sage/50 dark:text-stone-400 dark:hover:bg-sage/20 transition-colors"
          >
            Продължи пазаруване
          </Link>
        </div>
      </div>
    </div>
  );
}
