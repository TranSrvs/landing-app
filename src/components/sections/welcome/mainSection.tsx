import React from "react";
import Link from "next/link";

export default function MainSection() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-5xl px-8 flex">
        <div className="p-4">
          <h1 className="text-5xl font-semibold mb-3">
            We open up language to everyone
          </h1>
          <p className="text-base mb-5">
            Professional translation services made easy. Crafted by expert
            humans, powered by technology, efficiently delivered.
          </p>
          <Link
            className="my-3 mr-3 p-5 rounded-md bg-slate-600 text-white inline-block"
            href="/quote"
          >
            Instant Quote
          </Link>
          <Link
            className="my-3 mr-3 p-5 rounded-md bg-slate-500 text-white inline-block"
            href="/contact-us"
          >
            Contact Us
          </Link>
        </div>
        <div className="p-4">
          <picture>
            <img
              className="max-w-md"
              src="/welcome_hero.webp"
              alt="hero img"
              loading="eager"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
