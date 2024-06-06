import ArticleComponent from '@/app/_components/Blog/ArticleComponent';
import ArticleIntro from '@/app/_components/Blog/ArticleIntro';
import ArticleOverview from '@/app/_components/Blog/ArticleOverview';
// import { Article, ArticleContent } from '@/utils/interface';
import { fetchArticlesData, fetchBlogData, fetchStraiData, processArticleData } from '@/utils/utils'
import React from 'react'

interface BlogPageSingleProps {
    params: {
        slug: string;
    };
}

interface Articlee {
    slug: string;
}

interface Slug {
    attributes: {
        slug: string

    }
}

interface ImageData {
    id: number;
    attributes: {
        url?: string;
    };
}

interface Article {
    id: number,
    __component: string;
    headline: string;
    slug: string;
    paragraph?: string;
    islandscape?: boolean;
    imageshowright?: boolean;
    imageCaption?: string;
    image: {
        data: ImageData;
    };
}

export default async function BlogPageSingle({ params }: BlogPageSingleProps) {

    const { slug } = params

    const articles = await fetchArticlesData();

    const article = articles.find((article: Articlee) => article.slug === slug)

    return (
        <div>
            <ArticleIntro article={article} />
            <section className='single-blog'>
                <ArticleOverview article={article} />
                {article.articleContent.map((component: Article) => (
                    <ArticleComponent key={component.id} componentt={component} />
                ))}
            </section>
        </div>
    )
}

export async function generateStaticParams() {
    const article = await fetchBlogData("blog-articles")
    const data = article.data.data


    return data.map((data: Slug) => ({
        article: data.attributes.slug
    }))
}


export const revalidate = 300;