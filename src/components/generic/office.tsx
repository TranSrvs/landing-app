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
    <div className="flex">
      <div className="">
        <picture className="p-3 rounded-full bg-slate-200 block mr-5 border border-slate-500">
          <img src={`${process.env.BASE_PATH}/map_pin.svg`} alt="map pin" className="w-6 h-6" />
        </picture>
      </div>
      <div>
        <h5 className="text-lg font-semibold mb-3">{country}</h5>
        <p className="text-base mb-3 text-slate-500">
          {officeType}
          <br />
          <span>{address}</span>
        </p>
        <Link className="text-blue-600 underline" href={mapUri}>
          View map
        </Link>
      </div>
    </div>
  );
}
