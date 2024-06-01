import { reauthenticateWithCredential } from 'firebase/auth';
import React from 'react'
import ArticleHeadline from './ArticleHeadline';
import ParagraphWithImage from './ParagraphWithImage';
import ArticleParagraph from './ArticleParagraph';
import ArticleImage from './ArticleImage';
// import { BlogArticleComponent } from '@/utils/interface';


interface ArticleContent {
    componentt: {
        id: number,
        __component: string,
        headline: string,
        slug: string,
        paragraph?: string,
        islandscape?: boolean,
        imageshowright?: boolean,
        imageCaption?: string,
        image: {
            data: {
                id: number,
                attributes: {
                    url?: string,
                }
            }
        },


    },
}





function ArticleComponent({ componentt }: ArticleContent) {
    // console.log(component)
    const componenType = componentt.__component.split('blog-article.')[1];

    switch (componenType) {
        case 'head-line':
            return <ArticleHeadline headlinee={componentt} />
        case 'paragraphwithimage':
            return <ParagraphWithImage data={componentt} />
        case 'paragraph':
            return <ArticleParagraph data={componentt} />
        case 'image':
            return <ArticleImage data={componentt} />
        default:
            return <h1>component not found </h1>
    }

    return (
        <div>article component</div>
    )
}

export default ArticleComponent