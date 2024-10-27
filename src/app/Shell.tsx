"use client";
import React from 'react'
import ShowMarkdown from './ShowMarkdown';
// import dynamic from 'next/dynamic';

// const DynamicComponent = dynamic(() => import('@/app/ShowMarkdown').then(mod => mod.default), {
//   ssr: false,
// });

export const Shell = () => {
  return (
    <div><ShowMarkdown /></div>
  )
}
