
import React from 'react'


interface Headline {
    headlinee: {
        headline?: string;
        slug?: string;

    };
}

function ArticleHeadline({ headlinee }: Headline) {
    return (
        <h3 id={headlinee.slug} className='text-4xl mb-4'>{headlinee.headline}</h3>
    )
}

export default ArticleHeadline