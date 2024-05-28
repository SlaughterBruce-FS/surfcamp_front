import Link from 'next/link'
import React from 'react'


interface HeroProps {
    heroheadline: string;
}


const Hero: React.FC<HeroProps> = ({ heroheadline }) => {
    return (
        <section>
            <div>
                <img src="/assets/hero1.jpg" alt="hero image" />
            </div>
            <div>
                {heroheadline}
            </div>
            <Link href='/events'>book now</Link>
        </section>
    )
}

export default Hero