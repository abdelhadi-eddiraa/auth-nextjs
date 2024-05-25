'use client'
import React from 'react'
import {BackButtonProps} from './type'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const BackButton = ({label,href}:BackButtonProps) => {
  return (
    <div className='flex items-center w-full gap-x-2'>
        <Button variant="link" className='font-normal w-full' size="sm" >
            <Link href={href}>{label}</Link>
        </Button>
        </div>
  )
}
