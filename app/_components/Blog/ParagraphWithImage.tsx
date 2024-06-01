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
        <div className={`flex ${data.imageshowright ? 'flex-row' : 'flex-row-reverse'} text-2xl gap-12`}>
            <div className='flex-1'>
                <p>{data.paragraph}</p>
            </div>
            <div className='flex-1'>
                <img src={`http://localhost:1337${data.image.data.attributes.url}`} alt="" />
                <p className='text-center text-xl'>{data.imageCaption}</p>
            </div>
        </div>
    )
}

export default ParagraphWithImage