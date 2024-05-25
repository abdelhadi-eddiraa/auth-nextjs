import React from 'react'
import {Header} from "@/components/auth/header/header"
import { BackButton } from '../back-button/back-button'
import {Card,CardFooter,CardHeader} from "@/components/ui/card"
import { CardWrapper } from '../card-wrapper/card-wrapper'
const ErrorCard = () => {
  return (
    <CardWrapper 
    headerLabel='smathing went wrong!'
    backButtonHref='/auth/login'
    backButtonLabel='Back to login'>
     <span></span>
    </CardWrapper>
    
  )
}

export default ErrorCard