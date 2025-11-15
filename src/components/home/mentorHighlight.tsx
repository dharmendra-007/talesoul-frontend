"use client";

import Image from "next/image";
import Link from "next/link";

export default function MentorHighlight() {
  return (
    <section className="w-full flex justify-center pb-10 md:py-12 lg:px-30 px-8">
      <div className="relative w-full bg-[#F5F5F5] py-12 px-2 text-center shadow-sm flex flex-col justify-center items-center rounded-md md:rounded-none">

        {/* Floating Avatars */}
        <Image
          src="https://i.pravatar.cc/150?img=68"
          alt="mentor"
          width={30}
          height={30}
          className="rounded-full border-2 border-white shadow-lg absolute left-10 top-1/2 -translate-y-1/2 hidden md:block"
        />

        <Image
          src="https://i.pravatar.cc/150?img=12"
          alt="mentor"
          width={40}
          height={40}
          className="rounded-full border-2 border-white shadow-lg absolute bottom-6 left-1/4 hidden md:block"
        />

        <Image
          src="https://i.pravatar.cc/150?img=68"
          alt="mentor"
          width={30}
          height={30}
          className="rounded-full border-2 border-white shadow-lg absolute right-10 top-1/3 hidden md:block"
        />

        {/* Main Content */}
        <h2 className="text-2xl md:text-4xl font-semibold text-[#7A3E32]">
          Explore 100+ Mentors From Top University
        </h2>

        <p className="text-gray-600 mt-2">
          To help you achieve and overcome any challenges you face.
        </p>

        <Link 
        className="mt-6 px-4 py-4 rounded-full bg-gradient-to-b from-primary to-secondary hover:bg-[#a23232] text-white text-sm shadow-md hover:opacity-90"
        href="/consultant"
        >
          Browse All Mentors
        </Link>
      </div>
    </section>
  );
}
