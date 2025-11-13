import Link from 'next/link'
import Image from 'next/image'

function Logo () {
  return (
    <Link href='/'>
      <span className='flex justify-center items-center gap-2'>
        <Image 
          src='/images/logo.svg' 
          height={30} 
          width={40} 
          alt='logo' 
        />
        <span className='logo'>TaleSoul</span>
      </span>
    </Link>
  )
}

export default Logo
