"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollReveal(){
  const pathname=usePathname();
  useEffect(()=>{
    const root=document.documentElement;
    root.classList.add("motion-ready");
    const targets=Array.from(document.querySelectorAll<HTMLElement>(".reveal-section"));
    targets.forEach((target)=>target.classList.remove("is-visible"));
    const observer=new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
        if(entry.isIntersecting){
          (entry.target as HTMLElement).classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },{threshold:.12,rootMargin:"0px 0px -8% 0px"});
    const frame=requestAnimationFrame(()=>targets.forEach((target)=>observer.observe(target)));
    return()=>{cancelAnimationFrame(frame);observer.disconnect()};
  },[pathname]);
  return null;
}
