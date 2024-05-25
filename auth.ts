import NextAuth,{DefaultSession } from "next-auth"
import authConfig from "./auth.config"
import {PrismaAdapter}  from '@auth/prisma-adapter'
import { db } from "@/lib/db"
import { getUserById} from "./data/user"

export type ExtendedUser=DefaultSession["user"] &{
  role:"ADMIN" | "USER",
};
declare module "next-auth" { 
  interface Session {
    user: ExtendedUser
  }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut
} = NextAuth({ 
  pages:{
    signIn:"/auth/login",
    error:"/auth/error"
  },
  events:{
    async linkAccount({user}){
      await db.user.update({
        where:{
          id:user.id
        },
        data:{emailVerified: new Date}
      })
    }
  },
  callbacks:{
    async signIn({ user, account }) {
      // Allow OAuth without email verification
      if (account?.provider !== "credentials") {
          return true;
      }
  
      //prevent sing in without verification
      if (user.id) {
          // Check if user.id is defined before calling getUserById
          const existingUser = await getUserById(user.id);
  
          if (!existingUser?.emailVerified) {
              return false;
          }
      }

      //Todo:add 2fa check
  
      return true;
  },
  
    async session({ session, user, token }) {
     if (token.sub && session.user) {
      session.user.id=token.sub
     }
     if (token.role && session.user) {
      session.user.role=token.role as "ADMIN" | "USER";
     }
      return session
    },
    async jwt({ token}) {
      if (!token.sub) return token;
      const existinguser= await getUserById(token.sub);
      if (!existinguser) return token;
      
      token.role=existinguser.role;
   
      
      return token;
    }
  },
    adapter:PrismaAdapter(db),
    session:{strategy:"jwt"},
 ...authConfig,
})