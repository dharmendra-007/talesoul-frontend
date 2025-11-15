import Image from 'next/image'
import React from 'react'
import ProcessCard from '../ui/cards/processCard'

export default function About () {
  return (
    <section id='about' className='lg:px-30 px-8 flex flex-col gap-4 py-20 lg:py-30'>
      <span className='heading2 !text-[#733B34] text-center !font-semibold'>
        Long-term mentorship isn't just better - it's faster
      </span>
      <span className='para1 text-center'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt
      </span>
      <div className='relative'>
        <div className='flex flex-col md:flex-row items-center md:items-start justify-between mt-10 md:mt-15 gap-8'>
          <ProcessCard image='/images/search.png' title='1. Find A Mentor' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do' style=''/>
          <Image src='/images/path.svg' height={10} width={250} alt='path' className='md:-translate-y-3 lg:-translate-y-13 absolute md:left-[16%] lg:left-[14%] md:w-[130px] lg:w-[250px] hidden md:block'/>

          <ProcessCard image='/images/person.png' title='2. Connect With Mentor' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do' style=''/>
          <Image src='/images/path.svg' height={10} width={250} alt='path' className='md:-translate-y-3 lg:-translate-y-13 absolute md:left-[43%] lg:left-[41%] md:w-[130px] lg:w-[250px] hidden md:block'/>

          <ProcessCard image='/images/mentor.png' title='3. Learn From Mentor' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do' style=''/>
          <Image src='/images/path.svg' height={10} width={250} alt='path' className='md:-translate-y-3 lg:-translate-y-13 absolute md:left-[70%] lg:left-[68.5%] md:w-[130px] lg:w-[250px] hidden md:block'/>

          <ProcessCard image='/images/unity.png' title='4. Grow Together' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do' style=''/>
        </div>
      </div>
    </section>
  )
}
