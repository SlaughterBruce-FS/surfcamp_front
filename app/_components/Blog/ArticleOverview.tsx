import { Article } from '@/utils/interface'
import Link from 'next/link'
import React from 'react'



const ArticleOverview = ({ article }: Article) => {
    // console.log('article overview', article)

    //get hedlines from article content 
    const headlines = article.articleContent.filter((component) => component.__component === "blog-article.head-line")

    return (
        <div className='flex flex-col md:flex-row justify-between mt-[4rem] mb-16'>
            <div className='w-[60%]'>
                <h3 className='text-7xl mb-4'>In this blog</h3>
                <h5 className='text-4xl'>{article.exerpt}</h5>
            </div>
            <ul className='text-blue-600 mt-10 list-none underline text-leftt md:text-right'>
                {headlines.map((headline, index) => (
                    <li className='mb-4' key={index}>
                        <Link className='text-4xl' href={`#${headline.slug}`}>
                            {index + 1}. {headline.headline}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ArticleOverview