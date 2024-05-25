"use server";
import * as z from "zod"
import {RegisterSchema} from "@/schemas/index"

import bcrypt from 'bcrypt';

//check if the email is not taken
import {db} from '@/lib/db'
import { getUserByEmail } from "@/data/user";

import { generateverificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mails";




export const register = async(values: z.infer<typeof RegisterSchema>)=>{
    const validatedFields = RegisterSchema.safeParse(values);
    if(!validatedFields.success){
        return {error:"Invalid fields!"};
    }

    const {email,password,name}=validatedFields.data;
    const hashedPassword= await bcrypt.hash(password,10)
     

    const  existingUser= await getUserByEmail(email)

    if (existingUser) {
        return {error:"email already exixts!"};
    }

    await db.user.create({
        data:{
            name,
            email,
            password:hashedPassword
        }
    })

    //TODO send verification token email
    const verficationToken= await generateverificationToken(email);
    await sendVerificationEmail(verficationToken.email,verficationToken.token)
    
    return {success : "Confirmation email sent!"};
    }