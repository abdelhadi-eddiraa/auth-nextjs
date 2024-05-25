"use server";
import * as z from "zod"
import {loginSchema} from "@/schemas/index"

import {signIn} from '@/auth'
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { ifError } from "assert";
import { AuthError } from "next-auth";
import { generateverificationToken } from "@/lib/tokens";
import { getUserByEmail } from "@/data/user";
import { sendVerificationEmail } from "@/lib/mails";


export const login = async(values: z.infer<typeof loginSchema>)=>{
const validatedFields = loginSchema.safeParse(values);
if(!validatedFields.success){
    return {error:"Invalid fields!"};
}
const {email,password}=validatedFields.data
const existingUser= await getUserByEmail(email);
if (!existingUser || !existingUser.email || !existingUser.password) {
    return {error:"email dosent exist"}
}

if (!existingUser.emailVerified) {
    const verficationToken= await generateverificationToken(existingUser.email);
    await sendVerificationEmail(verficationToken.email,verficationToken.token)

  return {success:"Conformation email sent!"};
  
}

try {
    await signIn("credentials",{
        email,
        password,
        redirectTo:DEFAULT_LOGIN_REDIRECT
    })
} catch (error) {
   if (error instanceof AuthError) {
    switch (error.type) {
        case "CredentialsSignin":
            return {error:"Invalid credentials!"}
        default:
            return {error:"Something went wrong!"}

    }
   }
   throw error;
}
}


