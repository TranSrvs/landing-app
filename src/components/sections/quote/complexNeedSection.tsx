import React from "react";
import Link from "next/link";

export default function ComplexNeedSection() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-5xl px-8 flex items-center gap-4">
        <div className="grow">
          <div className="flex">
            <div className="mr-5">
              <div
                className="h-24 w-24 rounded-full bg-cover"
                style={{
                  backgroundImage: "url(/eugene.png)"
                }}
              ></div>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3">
                More complex needs?
              </h4>
              <p className="text-base mb-3">
                <span>
                  We will help you get a quote for complex documents, PDFs,
                  websites, software, and more.
                </span>
              </p>
              <p className="text-base mb-5 text-slate-500">
                <span>Eugene - Account Manager</span>
              </p>
            </div>
          </div>
        </div>
        <div className=" basis-1/3">
          <div className="flex items-center mb-3">
            <picture className="mr-3 inline-block">
              <img src="/telephone.svg" alt="telephone" />
            </picture>
            <Link className="text-blue-600" href="tel:(+82) 10-9160-1590">
              (+82) 10-9160-1590
            </Link>
          </div>
        </div>
        <div className="flex items-center mb-3 basis-1/3">
          <picture className="mr-3 inline-block">
            <img src="/send.svg" alt="telephone" />
          </picture>
          <Link className="text-blue-600" href="/contact-us">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
