import React from 'react'

const infoBlock = ({ data }) => {
    const {headline, text, button, reversed, imgSrc } = data
  return (
    <div>
        <img src={imgSrc} alt="pic text" />
        <div>
            <h2>{headline}</h2>
           {text}
            {button}
        </div>
    </div>
  )
}

export default infoBlock