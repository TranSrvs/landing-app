import React from "react";
import Link from "next/link";

export default function GetInstantQuoteSection() {
  return (
    <section className="py-12">
      <div className="flex px-8 mx-auto max-w-5xl">
        <div className="bg-slate-200 grow flex flex-col md:flex-row px-20 py-10 items-center text-center md:text-left">
          <div className="grow">
            <h3 className="text-3xl font-semibold mb-3">
              Get an instant quote
            </h3>
            <p className="text-base mb-5 text-slate-500">
              <span>The easy way to get your documents translated fast.</span>
            </p>
          </div>
          <Link
            className="py-3 px-8 rounded-md bg-slate-600 text-white"
            href="/quote"
          >
            Instant Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
