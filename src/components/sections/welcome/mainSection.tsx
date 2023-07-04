import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { basePath } from "@/domain/ds/constants";

export default function MainSection() {
  const { t } = useTranslation();
  return (
    <section className="py-12">
      <div className="mx-auto max-w-5xl px-8 flex flex-col md:flex-row">
        <div className="p-4">
          <h1 className="text-5xl font-semibold mb-3">
            {t("welcome_hero_title")}
          </h1>
          <p className="text-base mb-5">{t("welcome_hero_description")}</p>
          <Link
            className="my-3 mr-3 p-5 rounded-md bg-slate-600 text-white inline-block"
            href="/quote"
          >
            {t("instant_quote")}
          </Link>
          <Link
            className="my-3 mr-3 p-5 rounded-md bg-slate-500 text-white inline-block"
            href="/contact-us"
          >
            {t("contact_us")}
          </Link>
        </div>
        <div className="p-4">
          <picture>
            <img
              className="md:max-w-md mx-auto"
              src={`${basePath}/imgs/welcome_hero.webp`}
              alt="hero img"
              loading="eager"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
