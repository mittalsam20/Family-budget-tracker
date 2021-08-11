import React from 'react'
import NewsCards from '../news-cards/NewsCards'
import "./NewsBoard.scss"

function NewsBoard() {
    return (
        <div className='news-board'>
            <div className="heading">
                <h1>LATEST NEWS</h1>
                <hr />
            </div>
            <NewsCards />
        </div>
    )
}

export default NewsBoard
