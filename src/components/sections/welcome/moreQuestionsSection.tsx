import React from "react";
import Link from "next/link";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

export default function MoreQuestionsSection() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-5xl flex px-8 flex-col md:flex-row">
        <div className="p-4">
          <h3 className="text-3xl font-semibold mb-3">
            <span>More questions?</span>
            <br />
            <span>Get in touch.</span>
          </h3>
          <p className="text-base mb-5">
            <span>Our team is ready to find a solution</span>
            <br />
            <span>to your translation needs.</span>
          </p>
          <Link
            className="p-3 rounded-md bg-slate-500 text-white"
            href="/contact-us"
          >
            Contact Us
          </Link>
        </div>
        <div className="grow"></div>
        <div className="p-4 flex items-center flex-col">
          <div className="mb-5">
            <Link href="/contact-us">
              <div
                className="h-24 w-24 rounded-full bg-cover"
                style={{
                  backgroundImage: `url(${publicRuntimeConfig.basePath}/imgs/eugene.png)`
                }}
              ></div>
            </Link>
          </div>
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-3">
              <span>Hello, I&apos;m Eugene.</span>
              <br />
              <span>How can I help you?</span>
            </h4>
            <p className="text-base mb-5 text-slate-500">
              <span>Eugene - Account Manager</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
