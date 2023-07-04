import React from "react";
import Link from "next/link";
import {
  currencies,
  contactEmail,
  contactPhoneNo
} from "@/domain/ds/constants";
import useLocale from "@/hooks/useLocale";
import { basePath } from "@/domain/ds/constants";
import useCurrency from "@/hooks/useCurrency";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { onNavigateToLocale, locale, locales } = useLocale();
  const { onCurrencyChange, currency } = useCurrency();
  const { t } = useTranslation("common");

  return (
    <footer className="pb-16">
      <div className="mx-auto max-w-5xl px-8 flex flex-col md:flex-row">
        <div className="flex grow">
          <picture className="mr-6 hidden md:block">
            <img
              src={`${basePath}/imgs/logo.svg`}
              alt="logo"
              className="w-10 h-10"
            />
          </picture>
          <div className="py-4 pr-4">
            <p className="text-base mb-5">
              <span>{t("footer_we_are_on_a_mission")}</span>
            </p>
            <small className="text-small text-slate-500">
              {t("footer_copyrights")}
            </small>
          </div>
        </div>
        {/*	
        <div>
					<ul>
						<li><Link href="">Contact Us</Link></li>
						<li><Link href=""></Link></li>
						<li><Link href=""></Link></li>
					</ul>
				</div>
        */}
        <div className="basis-1/3">
          <div className="relative mb-3 ">
            <select
              className="py-3 pl-3 pr-6 w-full border rounded"
              value={locale}
              onChange={async (event) =>
                await onNavigateToLocale(event.target.value)
              }
            >
              {locales.map((item: string, index: number) => (
                <option key={index} value={item}>
                  {t(`lang_label_${item.toLowerCase()}`)}
                </option>
              ))}
            </select>
          </div>
          <div className="relative mb-6">
            <select
              className="py-3 pl-3 pr-6 w-full border rounded"
              value={currency}
              onChange={async (event) =>
                await onCurrencyChange(event.target.value)
              }
            >
              {currencies.map((item: string, index: number) => (
                <option key={index} value={item}>
                  {t(`currency_label_${item.toLowerCase()}`)}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center mb-3">
            <picture className="mr-3 inline-block">
              <img src={`${basePath}/imgs/telephone.svg`} alt="telephone" />
            </picture>
            <Link className="text-blue-600" href={`tel:${contactPhoneNo}`}>
              {contactPhoneNo}
            </Link>
          </div>
          <div className="flex items-center mb-3">
            <picture className="mr-3 inline-block">
              <img src={`${basePath}/imgs/send.svg`} alt="telephone" />
            </picture>
            <Link className="text-blue-600" href={`mailto:${contactEmail}`}>
              {contactEmail}
            </Link>
          </div>
          <div className="flex gap-4">
            <Link href="">
              <picture>
                <img
                  src={`${basePath}/imgs/twitter.svg`}
                  alt="social twitter"
                />
              </picture>
            </Link>
            <Link href="">
              <picture>
                <img
                  src={`${basePath}/imgs/linkedin.svg`}
                  alt="social linkedin"
                />
              </picture>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
