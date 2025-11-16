"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface MentorCardProps {
  image: string;
  name: string;
  role: string;
  tags: string[];
  rating: number;
}

export default function PrimaryMentorCard({
  image,
  name,
  role,
  tags,
  rating,
}: MentorCardProps) {
  return (
    <div className="bg-white rounded-3xl shadow-sm p-5 max-w-xs w-full flex flex-col items-center border border-gray-100">
      {/* Image Section */}
      <div className="relative w-full h-64 rounded-2xl overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 300px"
        />

        {/* Rating Badge */}
        <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-xl flex items-center gap-1 shadow">
          <span className="text-sm font-medium">{rating}</span>
          <span className="text-yellow-500 text-lg">★</span>
        </div>
      </div>

      {/* Name + Role */}
      <div className="mt-6 text-center">
        <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
        <p className="text-gray-500 text-sm mt-1">{role}</p>
      </div>

      {/* Tags using BADGE */}
      <div className="flex gap-3 flex-wrap justify-center mt-4">
        {tags.map((tag) => (
          <Badge
            key={tag}
            variant="secondary"
            className="px-4 py-1 rounded-full text-secondary-foreground bg-[#F1F1F1] text-sm"
          >
            {tag}
          </Badge>
        ))}
      </div>

      {/* Join Button */}
      <Button
        variant="secondaryButton"
        className="w-full mt-6 rounded-xl border-[1.5px] border-primary text-[#E56E63] py-5 text-base"
      >
        Join Community
      </Button>
    </div>
  );
}
