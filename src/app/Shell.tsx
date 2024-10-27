import React from 'react'
import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(() => import('@/app/ShowMarkdown').then(mod => mod.default), {
  ssr: false,
});

export const Shell = () => {
  return (
    <div><DynamicComponent /></div>
  )
}
