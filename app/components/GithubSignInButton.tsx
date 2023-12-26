'use client'

import { Button } from '@/components/ui/button'
import { GithubIcon } from 'lucide-react'
import { signIn } from 'next-auth/react'
import React from 'react'

const GithubSignInButton = () => {
  return (
    <Button onClick={()=> signIn('github')} variant={"outline"} size="icon">
            <GithubIcon className="w-4 h-4" />
          </Button>
  )
}

export default GithubSignInButton