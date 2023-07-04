import React from "react";
import ContactUsForm from "@/components/forms/contactUsForm";
import Office from "@/components/generic/office";
import Link from "next/link";
import { contactPhoneNo } from "@/domain/ds/constants";
import { useTranslation } from "react-i18next";
import { basePath } from "@/domain/ds/constants";

interface MainSectionProps {
  status: boolean;
}

export default function MainSection({ status }: MainSectionProps) {
  const { t } = useTranslation("common");
  return (
    <section className="py-12">
      <div className="mx-auto max-w-5xl px-8 flex flex-col md:flex-row gap-8">
        <div className="basis-1/2">
          <ContactUsForm />
        </div>
        <div className="basis-1/2">
          <h3 className="text-3xl font-semibold mb-3">{t("our_offices")}</h3>
          <br />
          <br />
          <div className="flex">
            <Office
              country="South Korea"
              officeType="Headquarters"
              address="Incheon"
              mapUri="https://map.google.com"
            />
          </div>
          <hr className="w-full border-t border-slate-500 my-12 border-dashed " />
          <div>
            <h5 className="text-lg font-semibold mb-3">
              {t("give_us_a_call")}
            </h5>
            {status && (
              <p className="text-base mb-5">
                <span>{t("we_are_online_now")}</span>
                <span>&nbsp;</span>
                <i className="h-2 w-2 rounded-full bg-green-500"></i>
              </p>
            )}
            {!status && (
              <>
                <p className="text-base mb-5">
                  <span>{t("we_are_not_online_now")}</span>
                  <i className="ml-3 inline-block h-2 w-2 rounded-full bg-red-500"></i>
                </p>

                <p className="text-base mb-3">{t("please_send_us_an_email")}</p>
                <div className="flex items-center mb-3">
                  <picture className="mr-3 inline-block">
                    <img
                      src={`${basePath}/imgs/telephone.svg`}
                      alt="telephone"
                    />
                  </picture>
                  <Link
                    className="text-blue-600"
                    href={`tel:${contactPhoneNo}`}
                  >
                    {contactPhoneNo}
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
