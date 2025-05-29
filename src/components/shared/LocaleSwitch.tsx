"use client";

import { hasLocale, Locale } from "next-intl";
import { routing } from "@/i18n/routing";
import { useEffect, useRef, useState, useTransition } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useParams } from "next/navigation";

function DropdownMenuItem({ locale }: { locale: Locale }) {
  const router = useRouter();

  const pathname = usePathname();
  const params = useParams();

  const [isPending, startTransition] = useTransition();

  function onSelect(nextLocale: Locale) {
    startTransition(() => {
      router.replace(
        // @ts-expect-error
        // TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      );
    });
  }

  return (
    <span
      onClick={() => onSelect(locale)}
      className="block px-4 py-2 text-sm hover:bg-grey-lightest dark:hover:bg-black active:bg-grey-light dark:active:bg-black"
    >
      {locale.toUpperCase()}
    </span>
  );
}

function DropdownMenu({ locales }: { locales: Locale[] }) {
  return (
    <div
      className="absolute right-30 top-0 z-10 mt-2 w-auto origin-top-right divide-y divide-gray-100 rounded-md dark:text-white bg-white dark:bg-night shadow-lg ring-1 ring-black/5 focus:outline-hidden"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
    >
      <div className="hover:cursor-pointer">
        {locales.map((locale: Locale) => (
          <DropdownMenuItem key={locale} locale={locale} />
        ))}
      </div>
    </div>
  );
}

export default function LocaleSwitch({
  currentLocale,
}: {
  currentLocale: Locale;
}) {
  const locales: Locale[] = routing.locales as unknown as Locale[];
  const curLocale: Locale = hasLocale(locales, currentLocale)
    ? currentLocale
    : (routing.defaultLocale as Locale);

  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  function onButtonClick() {
    setMenuOpen((prev) => !prev);
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex items-center gap-2 w-20">
      <div>
        <button
          ref={buttonRef}
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 px-3 py-2 text-sm text-black dark:text-white font-semibold dark:hover:text-neutral-300 shadow-xs ring-white ring-inset"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={onButtonClick}
        >
          {curLocale.toUpperCase()}
          <svg
            className="-mr-1 size-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
          >
            <path
              fill-rule="evenodd"
              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div
          ref={dropdownRef}
          className="absolute right-30 top-10 z-10 mt-2 w-auto origin-top-right divide-y divide-gray-100 rounded-md dark:text-white bg-white dark:bg-night shadow-lg ring-1 ring-black/5 focus:outline-hidden"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <DropdownMenu locales={locales} />
        </div>
      )}
    </div>
  );
}
