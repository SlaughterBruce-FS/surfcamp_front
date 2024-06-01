import { BlogArticleComponent } from '@/utils/interface'
import Link from 'next/link'
import React from 'react'
import ReactMarkdown from 'react-markdown'

const infoBlock = ({ data }: BlogArticleComponent) => {
  // console.log(data.button.id)
  const { headline, textc, button, reversed, imgSrc } = data
  return (

    <div className={`flex gap-16 mt-8 ${reversed ? 'flex-row-reverse' : 'flex-row'} ${reversed ? 'reversed' : 'not-reversed'}`}>

      <img src={`http://localhost:1337${imgSrc}`} className={`w-full flex-1 ${reversed ? 'reversedimg' : 'not-reversedimg'}`} alt="pic text" />
      <div className='flex-1 text-4xl'>
        <h2 className='text-7xl font-bold mt-16 mb-14 '>{headline}</h2>
        <ReactMarkdown className='mb-16'>{textc}</ReactMarkdown >
        <Link className='bg-teal-400 px-6 py-4 rounded-full text-white' href={button.slug}>{button.text}</Link>
      </div>
    </div >
  )
}

export default infoBlock