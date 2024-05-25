'use client'
import {LoginButtonProps}  from "./type"
import { useRouter } from "next/navigation"

import React from 'react'

const loginButton = ({children,mode="redirect",asChild}:LoginButtonProps) => {
   const router=useRouter();
    const onClick=()=>{
        router.push("auth/login")
    }
  return (
    <span onClick={onClick} className="cursor-pointer">{children}</span>
  )
}

export default loginButton