"use client";

import Image from "next/image";
import { FC } from "react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  message: string; // para2
  name: string; // para2
  about: string; // caption
  image: string;
  className?: string;
}

export const TestimonialCard: FC<TestimonialCardProps> = ({
  message,
  name,
  about,
  image,
  className,
}) => {
  return (
    <div
      className={cn(
        "bg-[#EAEAEA] rounded-xl shadow-sm p-6 flex flex-col justify-between w-[300px] md:w-full",
        className
      )}
    >
      <p className="text-gray-600 text-[15px] leading-relaxed">&quot;{message}&quot;</p>

      <div className="flex items-center gap-3 mt-6">
        <Image
          src={image}
          alt={name}
          width={45}
          height={45}
          className="rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-gray-800 text-[15px]">{name}</p>
          <p className="text-sm text-gray-500">{about}</p>
        </div>
      </div>
    </div>
  );
};
