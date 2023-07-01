import React from "react";
import Link from "next/link";

export default function MoreQuestionsSection() {
  return (
    <section>
      <div>
        <div>
          <h3>More questions? Get in touch.</h3>
          <p>
            <span>
              Our team is ready to find a solution to your translation needs.
            </span>
          </p>
          <Link href="/contact-us">Contact Us</Link>
        </div>
        <div></div>
        <div>
          <div>
            <Link href="/contact-us">
              <div></div>
            </Link>
          </div>
          <div>
            <h4>
              <span>Hello, I'm Eugene.</span>
              <br />
              <span>How can I help you?</span>
            </h4>
            <p>
              <span>Eugene - Account Manager</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
