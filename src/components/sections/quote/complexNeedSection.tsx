import React from "react";
import Link from "next/link";

export default function ComplexNeedSection() {
  return (
    <section>
      <div>
        <div>
          <div>
            <div>
              <div></div>
            </div>
            <div>
              <h4>More complex needs?</h4>
              <p>
                <span>
                  We will help you get a quote for complex documents, PDFs,
                  websites, software, and more.
                </span>
              </p>
              <p>
                <span>Eugene - Account Manager</span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <i></i>
            <Link href="tel:(+82) 10-0160-1590">(+82) 10-0160-1590</Link>
          </div>
        </div>
        <div>
          <div>
            <i></i>
            <Link href="/contact-us">Contact us</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
