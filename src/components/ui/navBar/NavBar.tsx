'use client'

import Link from 'next/link'
import React from 'react'
import Drawer from '../drawer/Drawer'
import Logo from '../logo'
import { usePathname } from 'next/navigation'

const navLinks = [
  { linkText: 'Why Us', link: '/#about', type: 'link' },
  { linkText: 'Consultant', link: '/consultant', type: 'link' },
  { linkText: 'Community', link: '/community', type: 'link' },
  { linkText: 'Soul Coin', link: '/soulcoin', type: 'link' },
  { linkText: 'Blog', link: '/blog', type: 'link' },
  { linkText: 'Sign In', link: '/login', type: 'button' }
]

export default function NavBar () {
  const pathname = usePathname()
  return (
    <div className='h-[70px] w-screen bg-background flex justify-between items-center lg:px-30 px-8 xl:shadow-[0_4px_18px_0_#00000014] z-50 fixed'>
      <Logo />
      <div className='hidden xl:flex items-center gap-6'>
        {navLinks.map((link, index) => {
          const isActive =
            link.link === pathname ||
            (pathname.startsWith(link.link) && link.link !== '/')

          return (
            <Link
              className={
                link.type === 'link'
                  ? `para1 ${
                      isActive
                        ? 'after:scale-x-100 !text-secondary font-bold'
                        : ''
                    }`
                  : 'text-primary-foreground shadow-xs bg-primary text-[0.9rem] rounded-4xl hover:bg-[#e07d70] cursor-pointer px-5 py-2 font-medium flex items-center justify-center'
              }
              href={link.link}
              key={index}
            >
              {link.linkText}
            </Link>
          )
        })}
      </div>
      <div className='xl:hidden'>
        <Drawer navLinks={navLinks} />
      </div>
    </div>
  )
}
