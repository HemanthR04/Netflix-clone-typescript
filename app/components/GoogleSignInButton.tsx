'use client'
import { Button } from '@/components/ui/button'
import React from 'react'
import GooogleIcon from "../../public/google.svg";
import Image from 'next/image'
import { signIn } from 'next-auth/react'
const GoogleSignInButton = () => {
  return (
    <Button onClick={()=> signIn('google')} variant={"outline"} size="icon">
            <Image src={GooogleIcon} alt="Google Login" className="w-6 h-6" />
          </Button>
  )
}

export default GoogleSignInButton