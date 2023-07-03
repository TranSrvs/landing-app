import React from "react";
import Link from "next/link";
import LanguageTpo from "@/domain/models/tpos/language";
import CurrencyTpo from "@/domain/models/tpos/currency";
import { Languages, Currencies } from "@/domain/ds/constants";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

interface FooterProps {
  onLangChanged(lang: LanguageTpo): void;
  onCurrencyChanged(currency: CurrencyTpo): void;
}

export default function Footer({
  onLangChanged,
  onCurrencyChanged
}: FooterProps) {
  let langItems = Languages.map((item: LanguageTpo) => (
    <option key={item.id} value={item.code}>
      {item.labelEn}
    </option>
  ));
  let currencyItems = Currencies.map((item: CurrencyTpo) => (
    <option key={item.id} value={item.code}>
      {item.labelEn}
    </option>
  ));

  return (
    <footer className="pb-16">
      <div className="mx-auto max-w-5xl px-8 flex">
        <div className="flex">
          <picture className="mr-6">
            <img
              src={`${publicRuntimeConfig.basePath}/logo.svg`}
              alt="logo"
              className="w-10 h-10"
            />
          </picture>
          <div className="py-4 pr-4">
            <p className="text-base mb-5">
              <span>
                We are on a mission to open up language to everyone, crafted by
                expert humans, powered by technology, and efficiently delivered.
              </span>
            </p>
            <small className="text-small text-slate-500">
              © Company Name · VAT 323323
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
            <select className="py-3 pl-3 pr-6 w-full border rounded">
              {langItems}
            </select>
          </div>
          <div className="relative mb-6">
            <select className="py-3 pl-3 pr-6 w-full border rounded">
              {currencyItems}
            </select>
          </div>
          <div className="flex items-center mb-3">
            <picture className="mr-3 inline-block">
              <img
                src={`${publicRuntimeConfig.basePath}/telephone.svg`}
                alt="telephone"
              />
            </picture>
            <Link className="text-blue-600" href="tel:(+82) 10-9160-1590">
              (+82) 10-9160-1590
            </Link>
          </div>
          <div className="flex items-center mb-3">
            <picture className="mr-3 inline-block">
              <img
                src={`${publicRuntimeConfig.basePath}/send.svg`}
                alt="telephone"
              />
            </picture>
            <Link className="text-blue-600" href="mailto:amoallim15@gmail.com">
              amoallim15@gmail.com
            </Link>
          </div>
          <div className="flex gap-4">
            <Link href="">
              <picture>
                <img
                  src={`${publicRuntimeConfig.basePath}/twitter.svg`}
                  alt="social twitter"
                />
              </picture>
            </Link>
            <Link href="">
              <picture>
                <img
                  src={`${publicRuntimeConfig.basePath}/linkedin.svg`}
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
