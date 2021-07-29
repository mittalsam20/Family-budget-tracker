import React, { useState } from 'react'
import NewsCard from '../news-card/NewsCard'
import "./NewsCards.scss"
import { generalUrl } from '../api/API'

function NewsCards() {

    const [news, setNews] = useState([])

    const req = new Request(generalUrl);
    fetch(req)
    .then((response) => {
        // console.log("hi", response)
        return response.json()
    })
    .then(data => {
        // console.log(data.articles)
        setNews(data.articles)
        return data
    })

    return (
        <div className='news-cards'>
            {
                news && news.map(data => (
                    <NewsCard key={data.publishedAt} title={data.title} description={data.description} image={data.urlToImage} url={data.url} />
                ))
            }
        </div>
    )
}

export default NewsCards
