import React from 'react';

export default function Logo({ className = "", isDark = false }: { className?: string, isDark?: boolean }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg width="48" height="48" viewBox="0 0 100 100" className="flex-shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40 35H25C16.7157 35 10 41.7157 10 50C10 58.2843 16.7157 65 25 65H40V35Z" fill="#F97316"/>
        <path d="M60 35H75C83.2843 35 90 41.7157 90 50C90 58.2843 83.2843 65 75 65H60V35Z" fill="#0EA5E9"/>
        <rect x="35" y="10" width="30" height="80" rx="15" fill={isDark ? "#FFFFFF" : "#0F172A"} />
        <path d="M35 35H40V65H35V35Z" fill="#F97316" />
        <path d="M60 35H65V65H60V35Z" fill={isDark ? "#FFFFFF" : "#0F172A"} />
      </svg>
      <div className="flex flex-col">
        <span className={`text-3xl font-bold tracking-widest leading-none ${isDark ? 'text-white' : 'text-slate-900'}`}>TTV</span>
        <span className={`text-[0.65rem] font-semibold tracking-[0.2em] uppercase leading-none mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Think Tank Venture</span>
      </div>
    </div>
  );
}
