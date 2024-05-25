import React from 'react'
import clsx from 'clsx';

import  style  from '@/styles/auth/layout-auth/style.module.css' 

const Authlayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className={clsx('w-full h-screen flex items-center justify-center', style.wrapper)}>
    {children}
  </div>
  )
}

export default Authlayout