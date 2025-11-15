"use client";

import { ReactNode } from "react";

export default function Marquee({ row1, row2 }: { row1: ReactNode; row2: ReactNode }) {
  return (
    <div className="overflow-hidden w-full relative lg:hidden flex flex-col gap-6">

      {/* LEFT SHADOW */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-white to-transparent z-20"></div>

      {/* RIGHT SHADOW */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-white to-transparent z-20"></div>

      {/* ROW 1 – duplicates row for infinite scroll */}
      <div className="flex w-max md:w-[300vw] animate-marquee gap-6" style={{ animation: "marquee 40s linear infinite" }}>
        {row1}
        {row1} {/* Required for infinite loop, NOT duplicate cards */}
      </div>

      {/* ROW 2 – scrolls slower */}
      <div className="flex w-max md:w-[300vw] animate-marquee gap-6" style={{ animation: "marquee 40s linear infinite" }}>
        {row2}
        {row2} {/* Required for infinite loop, NOT duplicate cards */}
      </div>
    </div>
  );
}
