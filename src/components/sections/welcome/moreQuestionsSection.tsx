import React from "react";
import Link from "next/link";
import { basePath } from "@/domain/ds/constants";
import { useTranslation } from "react-i18next";
import {
  contactPersonName,
  contactPersonPosition
} from "@/domain/ds/constants";

export default function MoreQuestionsSection() {
  const { t } = useTranslation("common");
  return (
    <section className="py-12">
      <div className="mx-auto max-w-5xl flex px-8 flex-col md:flex-row">
        <div className="p-4">
          <h3 className="text-3xl font-semibold mb-3">
            <span>{t("more_questions")}</span>
            <br />
            <span>{t("get_in_touch")}</span>
          </h3>
          <p className="text-base mb-5">
            <span>{t("our_team_is_ready")}</span>
            <br />
            <span>{t("to_your_translation_needs")}</span>
          </p>
          <Link
            className="p-3 rounded-md bg-slate-500 text-white"
            href="/contact-us"
          >
            {t("contact_us")}
          </Link>
        </div>
        <div className="grow"></div>
        <div className="p-4 flex items-center flex-col">
          <div className="mb-5">
            <Link href="/contact-us">
              <div
                className="h-24 w-24 rounded-full bg-cover"
                style={{
                  backgroundImage: `url(${basePath}/imgs/eugene.png)`
                }}
              ></div>
            </Link>
          </div>
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-3">
              <span>
                {t("hello_iam")} {contactPersonName}.
              </span>
              <br />
              <span>{t("how_can_i_help")}</span>
            </h4>
            <p className="text-base mb-5 text-slate-500">
              <span>
                {contactPersonName} - {contactPersonPosition}
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
