'use client'
import React, { useState } from 'react'
import FeaturedArticle from './FeaturedArticle'

interface FeaturedItemProps {
    headline?: string;
    items: Item[];
}

interface Item {
    id: number,
    headline?: string,
    slug?: string
    publishedAt: string,
    featuredImage?: string,

}

function BlogFront({ items }: FeaturedItemProps) {

    const [itemNumber, setItemNumber] = useState(4);


    return (
        <section className='py-60 flex flex-col justify-center items-center w-full '>
            <h3 className='text-7xl mb-16 font-bold text-center'>the blog.</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 mx-16'>
                {items
                    .slice(0, itemNumber)
                    .map((article, index) => (
                        <FeaturedArticle key={article.id} article={article} />
                    ))}
            </div>

        </section>
    )
}

export default BlogFront