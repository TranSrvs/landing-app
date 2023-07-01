import React from "react";
import PageType from "@/domain/models/enums/pageType";
import Link from "next/link";

interface TopNavProps {
  page: PageType;
}

const CONTACT_US_NAV_CASES = [PageType.WELCOME, PageType.QUOTE];
const INSTANT_QUOTE_NAV_CASES = [PageType.WELCOME, PageType.CONTACT_US];

export default function TopNav({ page }: TopNavProps) {
  return (
    <header className="mt-8 py-6">
      <div className="flex mx-auto px-8 h-12 items-center">
        <div>
          <Link href="/welcome">
            <img
              src="/logo.svg"
              className="h-12 w-12 inline-block"
              alt="logo"
            />
            <span className="ml-3 font-semibold">Company Name</span>
          </Link>
        </div>
        <div className="grow" />
        <nav className="">
          <ol className="flex items-center">
            {CONTACT_US_NAV_CASES.includes(page) && (
              <li className="flex items-center ml-3">
                <Link
                  href="/contact-us"
                  className={`
                  px-3 p-3
                  rounded-md border-slate-400 border
                `}
                >
                  Contact Us
                </Link>
              </li>
            )}
            {INSTANT_QUOTE_NAV_CASES.includes(page) && (
              <li className="flex items-center ml-3">
                <Link href="/quote" className="px-3 p-3">
                  Instant Quote
                </Link>
              </li>
            )}
          </ol>
        </nav>
      </div>
    </header>
  );
}
