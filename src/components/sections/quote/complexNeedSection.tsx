import React from "react";
import Link from "next/link";
import { basePath } from "@/domain/ds/constants";
import {
  contactPhoneNo,
  contactPersonName,
  contactPersonPosition
} from "@/domain/ds/constants";
import { useTranslation } from "next-i18next";

export default function ComplexNeedSection() {
  const { t } = useTranslation();
  return (
    <section className="py-12">
      <div className="mx-auto max-w-5xl px-8 flex flex-col md:flex-row items-center gap-4">
        <div className="grow">
          <div className="flex">
            <div className="mr-5">
              <div
                className="h-24 w-24 rounded-full bg-cover"
                style={{
                  backgroundImage: `url(${basePath}/eugene.png)`
                }}
              ></div>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3">
                {t("more_complex_needs")}
              </h4>
              <p className="text-base mb-3">
                <span>{t("we_will_help_you_get_a_quote")}</span>
              </p>
              <p className="text-base mb-5 text-slate-500">
                <span>
                  {contactPersonName} - {contactPersonPosition}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center mb-3 md:basis-1/3 self-start md:self-center">
          <picture className="mr-3 inline-block">
            <img src={`${basePath}/imgs/telephone.svg`} alt="telephone" />
          </picture>
          <Link className="text-blue-600" href={`tel:${contactPhoneNo}`}>
            {contactPhoneNo}
          </Link>
        </div>
        <div className="flex items-center mb-3 md:basis-1/3 self-start md:self-center">
          <picture className="mr-3 inline-block">
            <img src={`${basePath}/imgs/send.svg`} alt="telephone" />
          </picture>
          <Link className="text-blue-600" href="/contact-us">
            {t("contact_us")}
          </Link>
        </div>
      </div>
    </section>
  );
}
