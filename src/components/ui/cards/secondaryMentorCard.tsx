'use client'

import { Users } from 'lucide-react'

interface MentorCardProps {
  image: string
  name: string
  occupation: string
  expertise: string
  rating: number
  viewer: number 
}

export default function SecondaryMentorCard ({
  image,
  name,
  occupation,
  expertise,
  rating,
  viewer = 28
}: MentorCardProps) {
  return (
    <div
      className='relative rounded-3xl shadow-sm w-[280px] h-[290px] flex flex-col border border-gray-100 bg-no-repeat bg-cover justify-end items-start bg-[url("https://i.paravtar.cc/150?img=68")]'
      style={{ backgroundImage: `url(${image})` }}
      >
      {/* Rating Badge */}
      <div className='absolute top-2 right-2 bg-white px-2 py-0.5 rounded-lg flex items-center gap-1 shadow'>
        <span className='text-sm font-medium'>{rating}</span>
        <span className='text-yellow-500 text-base'>★</span>
      </div>

      {/* Name + Role */}
      <div className='mt-3 text-center flex justify-between bg-gradient-to-b from-[#727171]/10 to-[#000000] px-6 py-4 w-full rounded-b-3xl backdrop-blur-[3px]'>
      <div className='flex flex-col items-start text-white max-w-[80%] text-left'>
        <h3 className='text-lg mb-1.5 font-semibold w-full'>{name}</h3>
        <p className='text-sm mt-1 truncate w-full'>{occupation}</p>
        <p className='text-sm mt-1 truncate w-full'>{expertise}</p>
      </div>

        <div className='flex items-center gap-1 bg-white border px-2 py-1 rounded-xl shadow-sm text-gray-700 h-8'>
          <Users size={15} className='opacity-80' />
          <span className='text-sm font-medium'>{viewer}</span>
        </div>
      </div>
    </div>
  )
}
