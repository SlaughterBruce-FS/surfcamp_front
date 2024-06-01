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
            <img className='h-[500px] w-[full] object-cover' src={`http://localhost:1337${data.image.data.attributes.url}`} alt="text" />
        </div>
    )
}

export default ArticleImage