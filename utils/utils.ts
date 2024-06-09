import axios, { AxiosResponse } from "axios"
import { get } from "http"

export const BASE_URL = process.env.STRAPI_URL || 'http://localhost:1337/api'

export const IMAGE_URL = process.env.IMAGE_URL|| 'http://localhost:1337/'

export async function fetchStraiData(route: string) {
    const url = `${BASE_URL}/${route}`

try{
    const response = await  axios.get(url);

    return response.data.data
} catch(err) {
    console.log(err)
    throw new Error("couldn't fetch data")
}
   


}


export function processInfoBlocks(data: { attributes: { info_blocks: { data: any; }; }; }) {
    const infoBlocksRaw = data.attributes.info_blocks.data;

    // console.log(infoBlocksRaw)
   return infoBlocksRaw.map((infoBlock: { attributes: { image: { data: { attributes: { url: any; }; }; }; text: any; headline: any; showimageRight: any; button: any; }; id: any; }) => ({
      // console.log(infoBlock.attributes.headline);
  
      ...infoBlock.attributes,
      id: infoBlock.id,
      imgSrc: infoBlock.attributes.image.data.attributes.url,
      textc: infoBlock.attributes.text,
      headline: infoBlock.attributes.headline,
      reversed: infoBlock.attributes.showimageRight,
      button: infoBlock.attributes.button
  
    }))
}

export async function fetchBlogData(route: string) {
    const url = `${BASE_URL}/${route}`

    try{
        const response = await  axios.get(url);
        return response
    } catch(err) {
        console.log(err)
        throw new Error("couldn't fetch data")
    }

}



interface PArticle {
    id: number,
    attributes: {
      headline: string,
      exerpt: string,
      slug: string,
      author: string,
      isHighlightArticle: boolean,
      createdAt: Date,
      updatedAt: Date,
      publishedAt: string,
      featuredImage: FeatImage,
    //   articleContent: [Array]
    }
}

interface Particle {

    
 
      publishedAt: string,

  
}

interface FeatImage{
    data: {
        id: number,
        attributes: {
            url: string,
        }
    },
}




export function processArticleData(data: AxiosResponse<any, any>) {
    const featuredArticleRaw = data.data.data;
    // console.log("the article", featuredArticleRaw)

    const processedArticles = featuredArticleRaw.map((article: PArticle) => ({
        ...article.attributes,
        id: article.id,
        featuredImage: article.attributes.featuredImage.data.attributes.url,
        publishedAt: article.attributes.publishedAt

    }));

    processedArticles.sort((a: Particle, z: Particle) => new Date(z.publishedAt).getTime() - new Date(a.publishedAt).getTime());




    return processedArticles;
}

export async function fetchArticlesData() {
    const data = await fetchBlogData('blog-articles?populate=deep')

    // console.log('fetcharticledata', articles)
    const featuredArticleRaw = data.data.data;

    const processedArticles = featuredArticleRaw.map((article: PArticle) => ({
        ...article.attributes,
        id: article.id,
        featuredImage: article.attributes.featuredImage.data.attributes.url,
        publishedAt: article.attributes.publishedAt

    }));

    processedArticles.sort((a: Particle, z: Particle) => new Date(z.publishedAt).getTime() - new Date(a.publishedAt).getTime());

    return processedArticles;
}

export function formDate(dateString: string): string {
    const date: Date = new Date(dateString);

    // Check if the date is valid
    if (isNaN(date.getTime())) {
        // Return a default or error message if the date is invalid
        return 'Invalid date';
    }

    const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    };

    // Format the date to a string
    return date.toLocaleDateString("en-US", options);
}
