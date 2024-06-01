import Link from 'next/link'
import React from 'react'


interface HeroProps {
    headline: React.ReactNode,
    imgSrc: string
}


function Hero({ imgSrc, headline }: HeroProps) {
    return (
        <section className='hero h-[83rem] w-full relative mb-[12.5rem]'>
            <div className='h-[100%] w-full absolute top-0 left-0 -z-10 order-first'>
                <img src={imgSrc} alt="hero image" className='hero-img w-full h-full object-cover object-center border' />
            </div>
            <div className='text-6xl font-bold'>
                {headline}
            </div>
            <Link className='bg-teal-300 rounded-full px-5 py-3 text-white capitalize text-2xl' href='/events'>book now</Link>
        </section>
    )
}

export default Hero