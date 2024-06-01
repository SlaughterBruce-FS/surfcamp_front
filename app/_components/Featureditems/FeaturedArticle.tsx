
import { formDate } from '@/utils/utils'
import Link from 'next/link'
import React from 'react'

interface Article {

    article: {
        headline?: string,
        slug?: string
        publishedAt?: Date,
        featuredImage?: string,

    }
}


function FeaturedArticle({ article }: Article) {

    return (
        <Link href={`/blog/${article.slug}`} className='overflow-hidden flex flex-col'>
            <div >
                <img src={`http://localhost:1337${article.featuredImage}`} alt="pic" className='w-full h-[35.5rem] object-cover rounded-tl-3xl rounded-tr-3xl' />
            </div>
            <div className='p-8 bg-[#d7c094] flex flex-col justify-between rounded-bl-3xl rounded-br-3xl grow'>
                <h5 className='text-5xl mb-5'>{article.headline}</h5>
                <p className='text-3xl'>{formDate(article.publishedAt)}</p>
            </div>

        </Link>
    )
}

export default FeaturedArticle