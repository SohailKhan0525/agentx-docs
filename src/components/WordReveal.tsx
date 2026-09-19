import React,{useEffect,useRef,useState} from 'react';
export default function WordReveal({text}:{text:string}){
  const ref=useRef<HTMLParagraphElement>(null); const [shown,setShown]=useState(false);
  useEffect(()=>{const el=ref.current;if(!el)return;const io=new IntersectionObserver(([entry])=>{if(entry.isIntersecting){setShown(true);io.disconnect();}},{threshold:.35});io.observe(el);return()=>io.disconnect();},[]);
  return <p ref={ref} className="axWordReveal">{text.split(' ').map((word,i)=><span key={`${word}-${i}`} className={shown?'axWord axWordOn':'axWord'} style={{transitionDelay:`${i*70}ms`}}>{word}</span>)}</p>;
}