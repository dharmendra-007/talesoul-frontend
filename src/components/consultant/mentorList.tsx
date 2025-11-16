import BeAMentor from '../ui/cards/beAMentor'
import SecondaryMentorCard from '../ui/cards/secondaryMentorCard'

interface Mentor {
  image: string
  name: string
  occupation: string
  expertise: string
  rating: number
  viewer: number
}

export const mentors: Mentor[] = [
  {
    image: 'https://i.pravatar.cc/150?img=68',
    name: 'Alicia Roberts',
    occupation: 'Software Engineer',
    expertise: 'Full-Stack Development',
    rating: 4.9,
    viewer: 28
  },
  {
    image: 'https://i.pravatar.cc/150?img=68',
    name: 'Maria Johnson',
    occupation: 'UI/UX Designer',
    expertise: 'Product Design & Research',
    rating: 4.8,
    viewer: 32
  },
  {
    image: 'https://i.pravatar.cc/150?img=68',
    name: 'Chloe Bennett',
    occupation: 'Data Scientist',
    expertise: 'Machine Learning & Analytics',
    rating: 4.7,
    viewer: 21 // fixed: was "peopleCount"
  },
  {
    image: 'https://i.pravatar.cc/150?img=68',
    name: 'Jasmine Patel',
    occupation: 'Mobile Developer',
    expertise: 'React Native & Flutter',
    rating: 4.9,
    viewer: 40
  },
  {
    image: 'https://i.pravatar.cc/150?img=68',
    name: 'Olivia Carter',
    occupation: 'Cloud Engineer',
    expertise: 'AWS Architecture',
    rating: 5.0,
    viewer: 18
  },
  {
    image: 'https://i.pravatar.cc/150?img=68',
    name: 'Sofia Williams',
    occupation: 'DevOps Engineer',
    expertise: 'CI/CD & Automation',
    rating: 4.6,
    viewer: 30
  }
]

export default function MentorList () {
  // Make exactly 11 mentors for grid + 1 CTA card
  const gridMentors = mentors.slice(0, 11)

  return (
    <section className='w-full flex flex-col gap-4 pb-10 py-12 lg:px-30 px-8'>
      <h1 className='heading3 text-center md:text-left'>
        Explore 1,400+ Available Mentors
      </h1>

      <h2 className='para1 text-center md:text-left mb-4'>
        Experts from every niche use Topmate to build trust, grow revenue, and
        stay booked.
      </h2>

      {/* GRID: 4 columns desktop, 3 tablet, 2 mobile */}
      <div
        className='
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4 
        gap-8
        place-self-center
        md:place-self-start
      '
      >
        {/* Render 11 mentor cards */}
        {gridMentors.map((m, idx) => (
          <SecondaryMentorCard
            key={idx}
            image={m.image}
            name={m.name}
            occupation={m.occupation}
            expertise={m.expertise}
            rating={m.rating}
            viewer={m.viewer}
          />
        ))}

        {/* CTA card (12th item) */}
        <BeAMentor/>
      </div>
    </section>
  )
}
