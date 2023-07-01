import React from "react";
import Link from "next/link";

interface HeaderSectionProps {
  contactDateTime: string;
}

export default function HeaderSection({ contactDateTime }: HeaderSectionProps) {
  return (
    <section>
      <div>
        <div>
          <h2>Contact our team</h2>
          <h5>
            <span>Guaranteed answer by</span>
            <span>&nbsp;</span>
            <span>{contactDateTime}</span>
            <span>.</span>
          </h5>
          <br />
          <p>
            <i></i>
            <Link href="mailto:amoallim15@gmail.com">amoallim15@gmail.com</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
