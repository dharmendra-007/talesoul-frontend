import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

function Logo ({color = "pink"} : {
  color ?: string
}) {
  return (
    <Link href='/'>
      <span className='flex justify-center items-center gap-2'>
        <Image 
          src={color == "pink" ? '/images/logo-pink.svg' : '/images/logo-white.svg'} 
          height={30} 
          width={40} 
          alt='logo'
        />
        <span className={cn("logo" , color == "pink" ? "!text-primary" : "!text-white")}>TaleSoul</span>
      </span>
    </Link>
  )
}

export default Logo
