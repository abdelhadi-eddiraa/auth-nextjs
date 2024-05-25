
import style from '@/styles/main/style.module.css'
import { Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import LoginButton from '@/components/auth/login-button'

export default function Home() {
  return (
    <main className={style.main}>
      <div className={style.space_vertical}>
       <h1 className={`${style.main_text} ${style.font_poppins}`}>
        🔐 Auth
       </h1>
       <p className={style.paragraph_text}>
        A simple authentication service
       </p>
       <div>
       <LoginButton>
        <Button  className='bg-slate-100' variant="secondary" size="lg">
           Sing in
        </Button>
        </LoginButton>
       </div>
      </div>
    </main>
  );
}
