import React from 'react'

const infoBlock = ({ data }) => {
  const { headline, text, button, reversed, imgSrc } = data
  return (
    <div className={`flex gap-10 mt-8 ${reversed ? 'flex-row-reverse' : 'flex-row'} ${reversed ? 'reversed' : 'not-reversed'}`}>

      <img src={imgSrc} className={`w-full flex-1 ${reversed ? 'reversedimg' : 'not-reversedimg'}`} alt="pic text" />
      <div className='flex-1 text-3xl'>
        <h2 className='text-7xl font-bold mt-16 mb-14 '>{headline}</h2>
        {text}
        {button}
      </div>
    </div >
  )
}

export default infoBlock