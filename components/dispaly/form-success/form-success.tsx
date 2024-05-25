import React from 'react'
import {CheckCircledIcon} from "@radix-ui/react-icons"
import {FormSuccessProps} from './type'
export const FormSuccess = ({message}:FormSuccessProps) => {
  if (!message) return null;
    return (
    <div className='bg-green-600/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-green'>
        <CheckCircledIcon  className='h-4 w-4'/>
        <p>{message}</p>
    </div>
  )
}
