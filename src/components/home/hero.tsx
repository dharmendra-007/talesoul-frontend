import Image from 'next/image'
import Link from 'next/link'

export default function Hero () {
  return (
    <section className='flex justify-center items-center lg:flex-row min-h-[70vh] md:h-[70vh] lg:h-[90vh] w-full bg-gradient-to-r from-[#FFB9B9]/30 via-white to-[#FFB9B9]/30 lg:px-30 px-8 pt-[12vh]'>
      <div className='w-full flex items-start justify-baseline md:justify-between flex-col md:flex-row gap-4'>
        {/* Left Section */}
        <div className='flex flex-col gap-6 max-w-xl text-center md:text-left w-full md:w-1/2'>
          <h1 className='text-4xl md:text-5xl font-bold text-secondary leading-[140%]'>
            A Platform for Emotional Expression & Inner Healing
          </h1>
          <p className='para1'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>

          <div className='flex items-center justify-center md:justify-start gap-3'>
            <div className='flex items-center gap-1'>
              <div className='flex -space-x-2'>
                <div className='size-5 rounded-full object-contain bg-primary text-white flex justify-center items-center'>
                  <Image
                    src='/images/user.png'
                    height={10}
                    width={10}
                    alt='user'
                  />
                </div>
                <div className='size-5 rounded-full object-contain bg-primary text-white flex justify-center items-center'>
                  <Image
                    src='/images/user.png'
                    height={10}
                    width={10}
                    alt='user'
                  />
                </div>
                <div className='size-5 rounded-full object-contain bg-primary text-white flex justify-center items-center'>
                  <Image
                    src='/images/user.png'
                    height={10}
                    width={10}
                    alt='user'
                  />
                </div>
              </div>
              <span className='para1 font-bold'>30+ </span>
              <span className='para1'>Soul Users</span>
            </div>
          </div>

          <div className='flex justify-center md:justify-start'>
            <Link className='p-6 bg-gradient-to-b from-primary to-secondary hover:bg-[#a23232] text-white rounded-full transition-all cursor-pointer h-9 flex justify-center items-center' href="/community">
              Join Our Community
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className='relative flex justify-center md:justify-end items-start mt-12 md:mt-0 lg:mt-0 w-full md:w-1/2 h-[420px] sm:h-[460px] md:h-[500px] lg:h-[550px] xl:h-[580px]'>
          {/* Top Left Image */}
          <div className='absolute right-[10.1rem] md:right-[11.5rem] lg:right-[14rem] w-[155px] md:w-[180px] lg:w-[215px] xl:w-[238px] h-[180px] md:h-[205px] lg:h-[230px] xl:h-[257px] rounded-[12px] bg-white shadow-[0px_4px_12px_0px_#949494] overflow-hidden'>
            <Image
              src='/images/diya.jpg'
              alt='Diya'
              width={238}
              height={257}
              className='w-full h-full object-cover rounded-[12px]'
            />
          </div>

          {/* Top Right Image */}
          <div className='absolute right-[0.5%] md:right-0 top-[0%] w-[147px] md:w-[168px] lg:w-[189px] xl:w-[210px] h-[128px] md:h-[147px] lg:h-[165px] xl:h-[184px] rounded-[12px] bg-white shadow-[0px_4px_12px_0px_#949494] overflow-hidden'>
            <Image
              src='/images/nataraj.jpg'
              alt='Nataraj'
              width={210}
              height={184}
              className='w-full h-full object-cover rounded-[12px]'
            />
          </div>

          {/* Bottom Right Image */}
          <div className='absolute right-[0.5%] md:right-0 top-[9rem] md:top-[10.5rem] lg:top-[12.5rem] w-[180px] md:w-[205px] lg:w-[230px] xl:w-[256px] h-[160px] md:h-[185px] lg:h-[208px] xl:h-[231px] rounded-[12px] bg-white shadow-[0px_4px_12px_0px_#949494] overflow-hidden'>
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
