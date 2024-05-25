"use client"
import React from 'react'
import {CardWrapperProps} from "./type" 
import {Header} from '../header/header'
import { Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,} from '../../ui/card'
import { Social } from '../social/social'
import { BackButton } from '../back-button/back-button'

export const CardWrapper = ({
    children,
    headerLabel,
    backButtonLabel,
    backButtonHref,
    showSocial
}:CardWrapperProps) => {
  return (
    <Card className='w-[400px] shadow-md'>
    <CardHeader>
      <Header label={headerLabel} />
    </CardHeader>
    <CardContent>
      {children}
    </CardContent>
    {showSocial && (
      <CardFooter>
        <Social />
      </CardFooter>
    )}
    <CardFooter>
      <BackButton
        label={backButtonLabel}
        href={backButtonHref}
      />
    </CardFooter>
  </Card>
  )
}

