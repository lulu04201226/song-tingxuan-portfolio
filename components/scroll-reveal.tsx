"use client";

import { useEffect } from "react";

export function ScrollReveal(){
  useEffect(()=>{
    const root=document.documentElement;
    root.classList.add("motion-ready");
    const targets=Array.from(document.querySelectorAll<HTMLElement>(".reveal-section"));
    const observer=new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
        if(entry.isIntersecting){
          (entry.target as HTMLElement).classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },{threshold:.12,rootMargin:"0px 0px -8% 0px"});
    targets.forEach((target)=>observer.observe(target));
    return()=>{observer.disconnect();root.classList.remove("motion-ready")};
  },[]);
  return null;
}
