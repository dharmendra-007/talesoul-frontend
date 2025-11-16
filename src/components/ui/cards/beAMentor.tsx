import Image from 'next/image'
import Link from 'next/link'

export default function BeAMentor () {
  return (
    <div className='w-[280px] h-[290px] bg-[rgb(234,234,234)] rounded-3xl flex flex-col md:items-start items-center justify-center text-center px-6 gap-4'>
      <div className='size-10 rounded-full object-contain bg-primary text-white flex justify-center items-center'>
        <Image src='/images/user.png' height={20} width={20} alt='user' />
      </div>

      <p className='heading4 text-center md:text-left'>
        Become a mentor like them
      </p>

    <Link className='inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 [&_svg]:shrink-0 outline-none  aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-primary-foreground shadow-xs bg-primary text-[1rem] rounded-full hover:bg-[#e07d70] cursor-pointer h-9 px-4 py-5' href="/consultant/beamentor">Get Started</Link>
    </div>
  )
}
