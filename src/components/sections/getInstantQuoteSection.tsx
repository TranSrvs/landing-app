import React from "react";
import Link from "next/link";

export default function GetInstantQuoteSection() {
  return (
    <section>
      <div>
        <div>
          <div>
            <h3>Get an instant quote</h3>
            <p>
              <span>The easy way to get your documents translated fast.</span>
            </p>
          </div>
          <Link href="/quote">Instant Quote</Link>
        </div>
      </div>
    </section>
  );
}
