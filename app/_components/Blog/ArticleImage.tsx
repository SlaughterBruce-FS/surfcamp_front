import { IMAGE_URL } from '@/utils/utils'
import React from 'react'

interface Article {
    data: {
        image: {
            data: {
                attributes: {
                    url?: string
                }
            },

        }
    }
}

function ArticleImage({ data }: Article) {
    // console.log(data.image.data.attributes.url)

    return (
        <div className='mb-16 flex items-center justify-center'>
            <img className='h-[500px] w-[full] object-cover' src={`https://octopus-app-yk8af.ondigitalocean.app${data.image.data.attributes.url}`} alt="text" />
        </div>
    )
}

export default ArticleImage