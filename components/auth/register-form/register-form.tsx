'use client'
import React, { useState } from 'react'
import { CardWrapper } from '../card-wrapper/card-wrapper'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import {useForm} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from "zod"
import {RegisterSchema} from "@/schemas/index"
import { FormError } from '@/components/dispaly/form-error/form-error'
import { FormSuccess } from '@/components/dispaly/form-success/form-success'
import { register } from '@/actions/register'
import { useTransition } from 'react'
import { BsDatabaseDash } from 'react-icons/bs'


export const RegisterForm = () => {
  const [isPending,startTransition]=useTransition();
  const [error,setError]=useState<string | undefined>("");
  const [success,setSuccess]=useState<string | undefined>("");
  const form=useForm<z.infer<typeof RegisterSchema>>({
   resolver:zodResolver(RegisterSchema),
   defaultValues:{
    email:"",
    password:"",
    name:""
   }
  })

  const onSubmit=(values: z.infer<typeof RegisterSchema>)=>{
    setSuccess("");
    setError("");
    //server action pass values to server component
     startTransition(()=>{
      register(values).then((data)=>{
        setSuccess(data.success);
        setError(data.error);
      })
     })
     
  }
  return (
    <CardWrapper
    headerLabel='Create an Account'
    backButtonHref='/auth/login'
    backButtonLabel='Already have Account?'
    showSocial

    >
       <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>name</FormLabel>
              <FormControl>
                <Input disabled={isPending}  placeholder="name" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>email</FormLabel>
              <FormControl>
                <Input disabled={isPending} type='email' placeholder="email" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display email.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>password</FormLabel>
              <FormControl>
                <Input disabled={isPending} type='password' placeholder="password" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display password.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormSuccess  message={success}/>
        <FormError message={error}/>
        <Button disabled={isPending} className='bg-primary w-full'  type='submit'>register</Button>
      </form>
    </Form>
    </CardWrapper>
  )
}

