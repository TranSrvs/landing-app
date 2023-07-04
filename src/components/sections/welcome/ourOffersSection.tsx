import React from "react";
import { useTranslation } from "react-i18next";

export default function OurOffersSection() {
  const { t } = useTranslation("common");
  return (
    <section className="py-12">
      <div className="mx-auto max-w-5xl px-8 flex flex-col md:flex-row">
        <div className="p-4 grow basis-1/3">
          <h3 className="text-3xl font-semibold mb-3">{t("our_offers")}</h3>
        </div>
        <div className="p-4 basis-2/3">
          <h4 className="text-xl font-semibold mb-3">
            {t("professional_translation")}
          </h4>
          <p className="text-base mb-5">
            <span>{t("professional_translation_description_part_1")}</span>
            <br />
            <span>{t("professional_translation_description_part_2")}</span>
          </p>
          <h4 className="text-xl font-semibold mb-3">
            {t("official_translation")}
          </h4>
          <p className="text-base mb-5">
            {t("official_translation_description")}
          </p>
          <h4 className="text-xl font-semibold mb-3">
            {t("urgent_translation")}
          </h4>
          <p className="text-base mb-5">
            <span>{t("urgent_translation_description")}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
