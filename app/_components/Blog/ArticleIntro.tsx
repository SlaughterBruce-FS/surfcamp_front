import { Article } from '@/utils/interface'
import { IMAGE_URL, formDate } from '@/utils/utils'
import React from 'react'


const ArticleIntro = ({ article }: Article) => {

    return (
        <div className='article-intro overflow-hidden text-white'>
            <div className='absolute top-0 left-0 -z-10 w-full h-full overflow-hidden'>
                <div className='bg-black absolute w-full h-[83rem]  rounded-b-[20rem] opacity-45'></div>
                <img className='w-full h-[83rem] object-cover rounded-b-[20rem]' src={`${IMAGE_URL}${article.featuredImage}`} alt="" />
            </div>
            <h3 className='text-7xl font-bold mb-5 w-[59rem]'>{article.headline}</h3>
            <p className='text-4xl font-bold'>{formDate(article.publishedAt)}</p>
            <p className='text-4xl '>{article.author}</p>
        </div>
    )
}

export default ArticleIntro