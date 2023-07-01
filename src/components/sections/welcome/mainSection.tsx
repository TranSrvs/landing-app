import React from "react";
import Link from "next/link";

export default function MainSection() {
  return (
    <section>
      <div>
        <div>
          <h1>We open up language to everyone</h1>
          <p>
            Professional translation services made easy. Crafted by expert
            humans, powered by technology, efficiently delivered.
          </p>
          <Link href="/quote">Instant Quote</Link>
          <Link href="/contact-us">Contact Us</Link>
        </div>
        <div>
          <picture>
            <img src="/welcome_hero.webp" alt="hero img" loading="eager" />
          </picture>
        </div>
      </div>
    </section>
  );
}
