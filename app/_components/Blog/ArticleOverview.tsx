import { Article } from '@/utils/interface'
import Link from 'next/link'
import React from 'react'



const ArticleOverview = ({ article }: Article) => {
    // console.log('article overview', article)

    //get hedlines from article content 
    const headlines = article.articleContent.filter((component) => component.__component === "blog-article.head-line")

    return (
        <div className='flex justify-between mt-[4rem] text-2xl'>
            <div className='w-[60%]'>
                <h3 className='text-5xl mb-4'>In this blog</h3>
                <h5>{article.exerpt}</h5>
            </div>
            <ul className='text-blue-600 list-none underline text-right'>
                {headlines.map((headline, index) => (
                    <li className='mb-4' key={index}>
                        <Link href={`#${headline.slug}`}>
                            {index + 1}. {headline.headline}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ArticleOverview