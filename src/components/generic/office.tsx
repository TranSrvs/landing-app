import React from "react";
import Link from "next/link";

interface OfficeProps {
  country: string;
  officeType: string;
  address: string;
  mapUri: string;
}

export default function Office({
  country,
  officeType,
  address,
  mapUri
}: OfficeProps) {
  return (
    <>
      <div>
        <i></i>
      </div>
      <div>
        <h5>{country}</h5>
        <p>
          {officeType}
          <br />
          <span>{address}</span>
        </p>
        <Link href={mapUri}>View map</Link>
      </div>
    </>
  );
}
