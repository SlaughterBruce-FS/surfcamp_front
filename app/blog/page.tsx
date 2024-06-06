import React from 'react'
import HighlightArticles from '../_components/Blog/HighlightArticles'
import FeaturedItem from '../_components/Featureditems/FeaturedItem'
import axios from 'axios'
import { fetchBlogData, fetchStraiData, processArticleData } from '@/utils/utils'
import Subscribe from '../_components/Subscribe'


interface Article {
    isHighlightArticle: boolean,
}





async function Blog() {

    const data = await fetchBlogData('blog-articles?populate=deep');

    const featdata = processArticleData(data)

    const highlightArticleData = featdata.find((article: Article) => article.isHighlightArticle) || featdata[0];
    // console.log("highlight artice", foundhighlightArticle)


    const featuredArticles = featdata.filter((article: Article) => !article.isHighlightArticle);

    // console.log('feat articles', featuredArticles)
    return (
        <main className='blog-page'>
            <HighlightArticles data={highlightArticleData} />
            <Subscribe />
            <FeaturedItem headline={undefined} items={featuredArticles} />
        </main>
    )
}

export default Blog

export const revalidate = 300;