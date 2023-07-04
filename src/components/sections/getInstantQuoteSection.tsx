import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function GetInstantQuoteSection() {
  const { t } = useTranslation("common");

  return (
    <section className="py-12">
      <div className="flex px-8 mx-auto max-w-5xl">
        <div className="bg-slate-200 grow flex flex-col md:flex-row px-20 py-10 items-center text-center md:text-left">
          <div className="grow">
            <h3 className="text-3xl font-semibold mb-3">
              {t("get_an_instant_quote")}
            </h3>
            <p className="text-base mb-5 text-slate-500">
              <span>
                {t("the_easy_way_to_get_your_documents_translated_fast")}
              </span>
            </p>
          </div>
          <Link
            className="py-3 px-8 rounded-md bg-slate-600 text-white"
            href="/quote"
          >
            {t("instant_quote")}
          </Link>
        </div>
      </div>
    </section>
  );
}
