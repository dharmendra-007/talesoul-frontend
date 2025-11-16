'use client'

import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { Form, FormField, FormItem, FormControl } from '@/components/ui/form'
import PrimaryMentorCard from '../ui/cards/primaryMentorCard'
import { Button } from '../ui/button'

type SearchFormValues = {
  search: string
}

export const mentors = [
  {
    image: 'https://i.pravatar.cc/150?img=68',
    name: 'Krishna Das',
    role: 'Lead Solution Engineer',
    tags: ['Enterprise Sales', 'Technology'],
    rating: 5
  },
  {
    image: 'https://i.pravatar.cc/150?img=68',
    name: 'Arjun Mehta',
    role: 'Senior Cloud Architect',
    tags: ['Cloud', 'AWS', 'DevOps'],
    rating: 4.8
  },
  {
    image: 'https://i.pravatar.cc/150?img=68',
    name: 'Sana Kapoor',
    role: 'Product Manager',
    tags: ['Product', 'UX Thinking'],
    rating: 4.9
  }
]

export default function Mentor () {
  const form = useForm<SearchFormValues>({
    defaultValues: {
      search: ''
    }
  })

  const onSubmit = (values: SearchFormValues) => {
    console.log('Searching:', values.search)
  }

  return (
    <section className='lg:px-30 px-8 flex flex-col justify-center items-center gap-2 py-10'>
      <span className='heading2 text-center !text-secondary !font-semibold'>
        Meet Our Talesoul Mentors
      </span>

      <span className='para1 text-center'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt
      </span>

      {/* Search Bar */}
      <div className='flex justify-center w-full'>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='w-full max-w-lg'
          >
            <FormField
              control={form.control}
              name='search'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder='Search Mentor/Category/Subject...'
                      {...field}
                      className='h-[3rem] md:h-[3.5rem] lg:h-[3rem] w-full'
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>

      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10 py-10'>
        {mentors.map(mentor => (
          <PrimaryMentorCard
            key={mentor.name}
            image={mentor.image}
            name={mentor.name}
            role={mentor.role}
            tags={mentor.tags}
            rating={mentor.rating}
          />
        ))}
      </div>
      <Button variant='cta' className='py-6 w-32'>
        Explore More
      </Button>
    </section>
  )
}
