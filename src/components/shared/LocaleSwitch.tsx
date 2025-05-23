"use client";

import {hasLocale, Locale} from "next-intl";
import {routing} from "@/i18n/routing";
import {ChangeEvent, useTransition} from "react";
import {usePathname, useRouter} from "@/i18n/navigation";
import {useParams} from 'next/navigation';


export default function LocaleSwitch({ currentLocale }: { currentLocale: Locale }) {
  const locales: Locale[] = routing.locales as unknown as Locale[];
  const curLocale: Locale = hasLocale(locales, currentLocale) ? currentLocale : (routing.defaultLocale as Locale);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value as Locale;
    startTransition(() => {
      router.replace(
        // @ts-expect-error
        // TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        {pathname, params},
        {locale: nextLocale}
      );
    });
  }

  return (
    <div className="flex items-center gap-2">
      <select onChange={onSelectChange} className="bg-grey-lightest dark:bg-black dark:border-white border-gray-600 border-2 chipped-corner" defaultValue={curLocale}>
        {locales.map((locale: Locale) => (
          <option selected={locale === curLocale} key={locale} value={locale}>
            {locale.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}