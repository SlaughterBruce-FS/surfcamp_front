export interface HeadlineProps {
    headline: {
        headline: string;
        slug: string;
        __component: string;
    };
}

export interface Article {
    article: {
        headline: string,
        exerpt: string,
        slug: string,
        author: string,
        isHighlightArticle: boolean,
        createdAt: Date,
        updatedAt: Date,
        publishedAt: string,
        featuredImage: string,
        articleContent: [
            ArticleContent
        ]
    }
}

export interface ArticleContent {
    id: number,
    __component: string,
    headline: string,
    slug: string

}

export interface paraWithImage {
    data: {
        id?: number,
        headline?: string,
        slug?: string,
        __component?: string,
        paragraph: string,
        islandscape?: boolean,
        imageshowright: boolean,
        imageCaption: string,
        image?: {
            data: {
                id: number,
                attributes: {
                    url: string,
                }
            }
        }
    }

}

export interface BlogArticleComponent {
    // component: {
    //     id: number,
    //     __component: string,
    //     headline: string,
    //     slug: string,
    //     paragraph: string,
    //     islandscape: boolean,
    //     imageshowright: boolean,
    //     imageCaption: string,
    //     image: {
    //         data: {
    //             id: number,
    //             attributes: {
    //                 url: string,
    //             }
    //         }
    //     }
        
    // },
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
        reversed:string, 
        imgSrc:string 
        
    },
  

}

 interface Headline {
    __component: 'blog-article.head-line',
    id: number,
    slug: string;
    headlinee: {
        headline: string;
        slug: string;
        id: number,
        __component: string,
    };
  }