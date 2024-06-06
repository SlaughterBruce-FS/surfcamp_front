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
                <div className='bg-black absolute w-full h-[83rem]  rounded-b-[20rem] opacity-45'></div>
                <img src={imgSrc} alt="hero image" className='hero-img w-full h-full object-cover object-center border' />
            </div>
            <div className='text-7xl font-bold text-white'>
                {headline}
            </div>
            <Link className='bg-teal-300 rounded-full px-5 py-3 text-white capitalize text-4xl' href='/events'>book now</Link>
        </section>
    )
}

export default Hero