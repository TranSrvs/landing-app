import React from "react";
import ContactUsForm from "@/components/forms/ContactUsForm";
import Office from "@/components/generic/office";
import Link from "next/link";

export default function MainSection() {
  return (
    <section>
      <div>
        <div>
          <ContactUsForm />
        </div>
        <div>
          <h3>Our offices</h3>
          <br />
          <br />
          <div>
            <Office
              country="South Korea"
              officeType="Headquarters"
              address="Incheon"
              mapUri="https://map.google.com"
            />
          </div>
          <hr />
          <div>
            <h5>Give us a call</h5>
            <p>
              <span>We’re not online now</span>
              <span>&nbsp;</span>
              <i></i>
            </p>
            <p>Please send us an email or leave a voice message.</p>
            <p>
              <i></i>&nbsp;
              <Link href="tel:(+82) 10-9160-1590">(+82) 10-9160-1590</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
