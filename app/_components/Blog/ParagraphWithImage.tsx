// import { paraWithImage } from '@/utils/interface'
import { IMAGE_URL } from '@/utils/utils'
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
    const flexDirection = data.imageshowright ? 'flex-col' : 'flex-col-reverse';
    const mdFlexDirection = data.imageshowright ? 'md:flex-row' : 'md:flex-row-reverse';

    return (
        <div className={`flex flex-col ${data.imageshowright ? ' md:flex-row' : ' md:flex-row-reverse'} gap-12 mb-20`}>
            <div className='flex-1'>
                <p className='text-4xl leading-10 '>{data.paragraph}</p>
            </div>
            <div className='flex-1 w-full h-auto'>
                <img src={`${IMAGE_URL}${data.image.data.attributes.url}`} className='h-full w-full object-cover' alt="" />
                {data.imageCaption ?
                    <p className='text-center text-xl'>{data.imageCaption}</p>
                    : ''}
            </div>
        </div>
    )
}

export default ParagraphWithImage