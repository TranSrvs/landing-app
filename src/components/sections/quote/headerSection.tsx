import React from "react";
import { useTranslation } from "next-i18next";

export default function HeaderSection() {
  const { t } = useTranslation();
  return (
    <section className="py-12">
      <div className="mx-auto max-w-5xl px-8 flex text-center flex-col">
        <h2 className="text-5xl font-semibold mb-3">
          {t("professional_translation_made_easy")}
        </h2>
        <p className="text-base mb-5">
          <span>{t("lots_of_vetted_professional_translators")}</span>
        </p>
      </div>
    </section>
  );
}
