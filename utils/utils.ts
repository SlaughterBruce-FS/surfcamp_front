import axios from "axios"
import { get } from "http"

const BASE_URL = process.env.STRAPI_URL || 'http://localhost:1337/api'

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


export function processInfoBlocks(data) {
    const infoBlocksRaw = data.attributes.info_blocks.data;

    // console.log(infoBlocksRaw)
   return infoBlocksRaw.map((infoBlock) => ({
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




export function processArticleData(data) {
    const featuredArticleRaw = data.data.data;

    const processedArticles = featuredArticleRaw.map((article) => ({
        ...article.attributes,
        id: article.id,
        featuredImage: article.attributes.featuredImage.data.attributes.url

    }));

    processedArticles.sort((a,z) => new Date(z.publishedAt) - new Date(a.publishedAt))

    return processedArticles;
}

export async function fetchArticlesData() {
    const data = await fetchBlogData('blog-articles?populate=deep')

    // console.log('fetcharticledata', articles)
    const featuredArticleRaw = data.data.data;

    const processedArticles = featuredArticleRaw.map((article) => ({
        ...article.attributes,
        id: article.id,
        featuredImage: article.attributes.featuredImage.data.attributes.url

    }));

    processedArticles.sort((a,z) => new Date(z.publishedAt) - new Date(a.publishedAt))

    return processedArticles;
}

export function formDate(dateString) {
    const date = new Date(dateString)

    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }

    return date.toLocaleDateString("en-US", options)
}