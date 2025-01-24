"use client"
import { ReactNode } from 'react'
import Navbar from '@/components/navbar/navbar.component'
import { usePathname } from 'next/navigation'

type Props = {
  children: string | ReactNode | ReactNode[] | null
}

export default function MainPage({ children }: Props) {
  let isLogin = true;
  const pathname: string = usePathname();
  if (pathname === "/")
    isLogin = true
  else
    isLogin = false

  return (
    <div className="grid grid-cols-12">
      <Navbar isLogin={isLogin} />
      <div className={(isLogin) ? "col-span-12 h-screen" : "col-span-10"}>
        {children}
      </div>
    </div>
  )
}
