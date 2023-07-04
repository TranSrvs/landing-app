import React from "react";
import Link from "next/link";
import { basePath } from "@/domain/ds/constants";
import { useTranslation } from "react-i18next";
import { contactEmail } from "@/domain/ds/constants";

interface HeaderSectionProps {
  contactDateTime: string;
}

export default function HeaderSection({ contactDateTime }: HeaderSectionProps) {
  const { t } = useTranslation("common");

  return (
    <section className="py-12">
      <div className="mx-auto max-w-5xl px-8 flex text-center flex-col">
        <h2 className="text-5xl font-semibold mb-3">{t("contact_our_team")}</h2>
        <h5 className="text-base mb-5">
          <span>{t("guaranteed_answer_by")}</span>
          <span>&nbsp;</span>
          <span className="text-base font-semibold">{contactDateTime}</span>
          <span>.</span>
        </h5>
        <div className="flex items-center mb-3 justify-center grow">
          <picture className="mr-3 inline-block">
            <img src={`${basePath}/imgs/send.svg`} alt="telephone" />
          </picture>
          <Link className="text-blue-600" href={`mailto:${contactEmail}`}>
            {contactEmail}
          </Link>
        </div>
      </div>
    </section>
  );
}
