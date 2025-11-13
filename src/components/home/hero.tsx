import Image from "next/image"
import { Button } from "../ui/button"
import { Users } from "lucide-react"

export default function Hero () {
  return (
    <section className='flex justify-center items-center lg:flex-row h-[90vh] w-full bg-gradient-to-r from-[#FFB9B9]/30 via-white to-[#FFB9B9]/30 lg:px-30 px-8'>
      <div className="w-full flex items-start justify-between flex-col md:flex-row">
      {/* Left Section */}
      <div className='flex flex-col gap-6 max-w-xl text-center lg:text-left w-full md:w-1/2'>
        <h1 className='text-4xl md:text-5xl font-bold text-[#6B1D1D] leading-[140%]'>
          A Platform for Emotional Expression & Inner Healing
        </h1>
        <p className='text-gray-600'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>

        <div className='flex items-center justify-center lg:justify-start gap-3'>
          <div className='flex items-center gap-1 bg-[#FFF1F1] px-2 py-1 rounded-full shadow-sm'>
            <Users className='text-[#B83A3A] w-5 h-5' />
            <span className='text-sm font-medium text-gray-700'>
              30+ Soul Users
            </span>
          </div>
        </div>

        <div className='flex justify-center lg:justify-start'>
          <Button variant="cta">
            Join Our Community
          </Button>
        </div>
      </div>

      {/* Right Section */}
      <div className='relative flex justify-center lg:justify-end items-start mt-12 lg:mt-0 w-full md:w-1/2 h-full'>
        {/* Top Left Image */}
        <div className='absolute lg:static w-[165px] md:w-[190px] lg:w-[215px] xl:w-[238px] h-[180px] md:h-[205px] lg:h-[230px] xl:h-[257px] rounded-[12px] bg-white shadow-[0px_4px_12px_0px_#949494] overflow-hidden -translate-x-40 md:-translate-x-46 xl:-translate-x-56'>
          <Image
            src='/images/diya.jpg'
            alt='Diya'
            width={238}
            height={257}
            className='w-full h-full object-cover rounded-[12px]'
          />
        </div>

        {/* Top Right Image */}
        <div className='absolute w-[147px] md:w-[168px] lg:w-[189px] xl:w-[210px] h-[128px] md:h-[147px] lg:h-[165px] xl:h-[184px] rounded-[12px] bg-white shadow-[0px_4px_12px_0px_#949494] overflow-hidden'>
          <Image
            src='/images/nataraj.jpg'
            alt='Nataraj'
            width={210}
            height={184}
            className='w-full h-full object-cover rounded-[12px]'
          />
        </div>

        {/* Bottom Right Image */}
        <div className='absolute w-[180px] md:w-[205px] lg:w-[230px] xl:w-[256px] h-[160px] md:h-[185px] lg:h-[208px] xl:h-[231px] rounded-[12px] bg-white shadow-[0px_4px_12px_0px_#949494] overflow-hidden  translate-y-35 md:translate-y-42 xl:translate-y-50'>
          <Image
            src='/images/dance.jpg'
            alt='Dance'
            width={256}
            height={231}
            className='w-full h-full object-cover rounded-[12px]'
          />
        </div>
      </div>
      </div>
    </section>
  )
}
