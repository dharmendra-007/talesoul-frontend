'use client'

import { TestimonialCard } from '../ui/cards/testimonialCard'
import Marquee from '../ui/marquee'

const testimonials = [
  {
    message:
      "I love Topmate! It has made it seamless to schedule mentoring sessions! Big fan of Topmate's WhatsApp integration.",
    name: 'Radhika Dash',
    about: 'Student Of KIT University',
    image: 'https://i.pravatar.cc/150?img=68'
  },
  {
    message:
      'Topmate made everything super smooth! Scheduling sessions has never been easier.',
    name: 'Amit Sharma',
    about: 'Software Engineer',
    image: 'https://i.pravatar.cc/150?img=68'
  },
  {
    message:
      'Amazing platform for mentoring! WhatsApp updates are extremely helpful.',
    name: 'Shruti Patel',
    about: 'Student',
    image: 'https://i.pravatar.cc/150?img=68'
  },
  {
    message:
      'One of the best tools for managing mentoring workflow. Highly recommended!',
    name: 'Rohan Kulkarni',
    about: 'Mentor',
    image: 'https://i.pravatar.cc/150?img=68'
  },
  {
    message: 'This platform truly simplifies the mentoring workflow!',
    name: 'Neha Verma',
    about: 'Research Scholar',
    image: 'https://i.pravatar.cc/150?img=68'
  },
  {
    message: 'Scheduling and communication is so smooth now!',
    name: 'Kiran Rao',
    about: 'Student',
    image: 'https://i.pravatar.cc/150?img=68'
  }
]

export default function Testimonial () {
  return (
    <section className='w-full py-16 lg:px-30 px-8 flex flex-col justify-center items-center gap-6'>
      {/* Heading */}
      <span className='heading2 !font-semibold text-center !text-secondary'>
        Don&apos;t Just Our Word for it!
      </span>

      <span className='para1 text-center'>
        Here What the People is saying about us.
      </span>

      {/* Desktop / Tablet Layout (3 Columns, Custom heights) */}
      <div className='hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12 w-full'>
        {/* COLUMN 1 */}
        <div className='flex flex-col gap-6'>
          <TestimonialCard {...testimonials[0]} className='h-[260px]' />
          <TestimonialCard {...testimonials[1]} className='h-[200px]' />
        </div>

        {/* COLUMN 2 */}
        <div className='flex flex-col gap-6'>
          <TestimonialCard {...testimonials[2]} className='h-[200px]' />
          <TestimonialCard {...testimonials[3]} className='h-[260px]' />
        </div>

        {/* COLUMN 3 */}
        <div className='flex flex-col gap-6'>
          <TestimonialCard {...testimonials[4]} className='h-[260px]' />
          <TestimonialCard {...testimonials[5]} className='h-[200px]' />
        </div>
      </div>

      {/* Mobile Marquee */}
      <div className='lg:hidden mt-8 w-full'>
        <Marquee
          row1={
            <>
              <TestimonialCard {...testimonials[0]} />
              <TestimonialCard {...testimonials[1]} />
              <TestimonialCard {...testimonials[2]} />
            </>
          }
          row2={
            <>
              <TestimonialCard {...testimonials[3]} />
              <TestimonialCard {...testimonials[4]} />
              <TestimonialCard {...testimonials[5]} />
            </>
          }
        />
      </div>
    </section>
  )
}
