import React from 'react'
import NewsCard from '../news-card/NewsCard'
import "./NewsCards.scss"

function NewsCards() {
    return (
        <div className='news-cards'>
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
        </div>
    )
}

export default NewsCards
