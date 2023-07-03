import React from "react";

export default function OurOffersSection() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-5xl px-8 flex">
        <div className="p-4 grow basis-1/3">
          <h3 className="text-3xl font-semibold mb-3">Our Offers</h3>
        </div>
        <div className="p-4 basis-2/3">
          <h4 className="text-xl font-semibold mb-3">
            Professional Translation
          </h4>
          <p className="text-base mb-5">
            <span>
              The easy and fast way to professionally translate documents,
              manuals, websites and more, according to your schedule and
              requirements.
            </span>
            <span>
              We currently Support Arabic, English, Korean, and Russian.
            </span>
          </p>
          <h4 className="text-xl font-semibold mb-3">Official translations</h4>
          <p className="text-base mb-5">
            Our professional translation services can be certified or sworn in
            Court, depending on the country where you must present your
            document.
          </p>

          <h4 className="text-xl font-semibold mb-3">Urgent Translations</h4>
          <p className="text-base mb-5">
            <span>
              We can translate large volumes in less than 24 hours thanks to our
              large network of translators powered by optimized technologies.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
