import React from "react";


export interface LoginButtonProps{
    children:React.ReactNode;
    mode?: "modal" | "redirect";
    asChild?:boolean
}