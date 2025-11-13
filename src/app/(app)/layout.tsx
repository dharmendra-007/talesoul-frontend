import type { Metadata } from 'next'
import NavBar from '@/components/ui/navBar/NavBar'

export const metadata: Metadata = {
  title: 'Talesoul - coming soon',
  description:
    "TaleSoul is the world's first emotional currency platform where your feelings have value. Share emotions, earn SoulCoins, connect with guides, and join a kind, judgment-free community."
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <NavBar />
      {children}
    </>
  )
}
