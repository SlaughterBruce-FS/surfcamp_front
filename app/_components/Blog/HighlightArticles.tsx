// import { BlogArticleComponent } from '@/utils/interface'
import Link from 'next/link'
import React from 'react'

interface BlogArticleComponent {
    data: {
        id: number,
        __component: string,
        headline: string,
        slug: string,
        paragraph: string,
        islandscape: boolean,
        imageshowright: boolean,
        imageCaption: string,
        exerpt: string,
        featuredImage: string,
        image: {
            data: {
                id: number,
                attributes: {
                    url: string,
                }
            },
            component?: string
        },
        textc: string,
        button: {
            slug: string,
            text: string,
        },
        reversed: string,
        imgSrc: string

    },


}

const HighlightArticles = ({ data }: BlogArticleComponent) => {
    // console.log(data)
    const { featuredImage, headline, exerpt, slug } = data
    return (
        <article className='flex flex-col-reverse md:flex-row gap-10 '>
            <div className='flex-1'>
                <h3 className='text-7xl mt-14 mb-16'>{headline}</h3>
                <p className='text-2xl mb-16'>{exerpt}</p>
                <Link className='bg-teal-400 text-3xl text-white px-8 py-6 rounded-full' href={`/blog/${slug}`} >read more</Link>
            </div>
            <div className='flex-1'>
                <img className='rounded-3xl' src={`http://localhost:1337${featuredImage}`} alt="img" />
            </div>
        </article>
    )
}

export default HighlightArticles