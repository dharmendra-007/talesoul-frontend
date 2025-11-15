import { Instagram, Linkedin, Twitter } from 'lucide-react'
import Logo from '../logo'
import { Input } from '../input'
import Link from 'next/link'

export default function Footer () {
  return (
    <section className='relative bg-gradient-to-t from-primary to-secondary lg:px-30 px-8 py-10 flex flex-col gap-6 md:gap-1'>
      <div className='flex flex-col md:flex-row md:justify-between md:items-start gap-6 md:gap-0 items-center'>
      <div className='flex flex-col items-start justify-between h-full relative'>
        <Logo color='white' />
      </div>
      <div className='flex md:gap-16 gap-6 flex-col md:flex-row items-center md:items-start'>
        <div className='flex flex-col md:gap-4 gap-2 caption !font-medium !text-white text-center md:text-left'>
          <Link href="/#about">About Us</Link>
          <Link href="/">Contact Us</Link>
          <Link href="/">Term & Condition</Link>
          <Link href="/">Privacy</Link>
        </div>
        <div className='flex flex-col gap-3 text-center md:text-left'>
          <h4 className='!font-semibold !text-white caption'>Subscribe</h4>

          <p className='caption !text-white max-w-xs'>
            Subscribe to stay tuned for new web-design and latest updates. Let's
            do it!
          </p>

          <div className='flex mt-2'>
            <Input
              placeholder='Enter Your Email'
              className='bg-white text-black caption h-11'
            />
          </div>

          <div className='flex items-center gap-4 mt-4 md:justify-end justify-center text-white'>
            <Linkedin className='size-5 cursor-pointer hover:opacity-80' />
            <Instagram className='size-5 cursor-pointer hover:opacity-80' />
            <Twitter className='size-5 cursor-pointer hover:opacity-80' />
          </div>
        </div>
      </div>
      </div>
      <span className='caption !text-[#FFFFFF] text-center md:text-left'>
        © 2025 All Rights Reserved
      </span>
    </section>
  )
}
