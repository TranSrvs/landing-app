import React from "react";
import Link from "next/link";

interface HeaderSectionProps {
  contactDateTime: string;
}

export default function HeaderSection({ contactDateTime }: HeaderSectionProps) {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-5xl px-8 flex text-center flex-col">
        <h2 className="text-5xl font-semibold mb-3">Contact our team</h2>
        <h5 className="text-base mb-5">
          <span>Guaranteed answer by</span>
          <span>&nbsp;</span>
          <span className="text-base font-semibold">{contactDateTime}</span>
          <span>.</span>
        </h5>
        <div className="flex items-center mb-3 justify-center grow">
          <picture className="mr-3 inline-block">
            <img src={`${process.env.BASE_PATH}/send.svg`} alt="telephone" />
          </picture>
          <Link className="text-blue-600" href="mailto:amoallim15@gmail.com">
            amoallim15@gmail.com
          </Link>
        </div>
      </div>
    </section>
  );
}
