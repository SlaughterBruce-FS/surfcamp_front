// import { paraWithImage } from '@/utils/interface'
import React from 'react'

export interface paraWithImage {
    data: {
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
        }
    }

}

function ParagraphWithImage({ data }: paraWithImage) {

    // const imgUrl = data.image.data.attributes.url

    return (
        <div className={`flex ${data.imageshowright ? 'flex-row' : 'flex-row-reverse'}  gap-12 mb-20`}>
            <div className='flex-1'>
                <p className='text-4xl leading-10 '>{data.paragraph}</p>
            </div>
            <div className='flex-1 w-full h-auto'>
                <img src={`http://localhost:1337${data.image.data.attributes.url}`} className='h-full w-full object-cover' alt="" />
                {data.imageCaption ?
                    <p className='text-center text-xl'>{data.imageCaption}</p>
                    : ''}
            </div>
        </div>
    )
}

export default ParagraphWithImage