import React from 'react'

interface Article {
    data: {

        paragraph?: string
    }


}

function ArticleParagraph({ data }: Article) {

    return (
        <div className='mb-16'>
            <p className='text-4xl'>{data.paragraph}</p>
        </div>
    )
}

export default ArticleParagraph