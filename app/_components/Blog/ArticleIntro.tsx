import { Article } from '@/utils/interface'
import { formDate } from '@/utils/utils'
import React from 'react'


const ArticleIntro = ({ article }: Article) => {

    return (
        <div className='article-intro overflow-hidden'>
            <div className='absolute top-0 left-0 -z-10 w-full h-full '>
                <img className='w-full h-[83rem] object-cover rounded-b-[20rem]' src={`http://localhost:1337${article.featuredImage}`} alt="" />
            </div>
            <h3 className='text-5xl font-bold mb-5 w-[59rem]'>{article.headline}</h3>
            <p className='text-2xl font-bold'>{formDate(article.publishedAt)}</p>
            <p className='text-2xl '>{article.author}</p>
        </div>
    )
}

export default ArticleIntro