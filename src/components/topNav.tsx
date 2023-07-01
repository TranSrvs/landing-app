import React from "react";
import PageType from "@/domain/models/enums/pageType";
import Link from "next/link";

interface TopNavProps {
  page: PageType;
}

const CONTACT_US_NAV_CASES = [PageType.WECLOME, PageType.QUOTE];
const INSTANT_QUOTE_NAV_CASES = [PageType.WECLOME, PageType.CONTACT_US];

export default function TopNav({ page }: TopNavProps) {
  return (
    <header>
      <nav>
        <div>
          <Link href="/welcome">
            <img src="/logo.svg" alt="logo" />
            <span>Company Name</span>
          </Link>
        </div>
        <div>
          {CONTACT_US_NAV_CASES.includes(page) && (
            <Link href="/contact-us">Contact Us</Link>
          )}
          {INSTANT_QUOTE_NAV_CASES.includes(page) && (
            <Link href="/quote">Instant Quote</Link>
          )}
        </div>
      </nav>
    </header>
  );
}
