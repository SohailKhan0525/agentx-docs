import React,{useEffect,useRef,useState} from 'react';
export default function Reveal({children,className='' }:{children:React.ReactNode;className?:string}){
  const ref=useRef<HTMLDivElement>(null); const [shown,setShown]=useState(false);
  useEffect(()=>{const el=ref.current;if(!el)return;const io=new IntersectionObserver(([entry])=>{if(entry.isIntersecting){setShown(true);io.disconnect();}},{threshold:.12});io.observe(el);return()=>io.disconnect();},[]);
  return <div ref={ref} className={`${className} axReveal ${shown?'axRevealVisible':''}`}>{children}</div>;
}