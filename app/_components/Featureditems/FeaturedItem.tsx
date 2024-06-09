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

function FeaturedItem({ headline, items }: FeaturedItemProps) {

    const [itemNumber, setItemNumber] = useState(3);

    const onShowMore = () => {
        if (itemNumber + 3 > items.length) {
            return setItemNumber(items.length)
        } else {
            return setItemNumber(itemNumber + 3)
        }

    }

    return (
        <section className='py-60 flex flex-col justify-center items-center'>
            <h3 className='text-7xl mb-16 font-bold mr-auto'>{headline || "Our Featured articles"}</h3>
            <div className='grid grid-cols-1 md:grid-cols-3  gap-8 mb-12 '>
                {items
                    .slice(0, itemNumber)
                    .map((article, index) => (
                        <FeaturedArticle key={article.id} article={article} />
                    ))}
            </div>
            {itemNumber < items.length && (
                <button className='bg-teal-400 px-6 py-4 rounded-full text-white text-3xl' onClick={onShowMore}>See more</button>
            )}
        </section>
    )
}

export default FeaturedItem