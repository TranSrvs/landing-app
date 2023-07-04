import React from "react";
import { useRouter } from "next/router";

interface IUseLocale {
  locale: string;
  locales: string[];
  onNavigateToLocale(locale: string): void;
}

export default function useLocale(): IUseLocale {
  const router = useRouter();
  const onNavigateToLocale = React.useCallback(
    async (locale: String) => {
      await router.push(router.pathname, router.pathname, { locale: locale });
    },
    [router]
  );

  return {
    locale: router.locale,
    locales: router.locales,
    onNavigateToLocale
  };
}
