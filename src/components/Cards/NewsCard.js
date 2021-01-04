import React from "react";
import './NewsCard.scss'

export default class NewsCard extends React.Component{
    render () {
        return(
            <div className="card-container">
                <div className='top-container'>
                    <div className="article-title">
                        Article Title
                    </div>
                    <div className='article-link'>
                        www.google.com
                    </div>
                    <div className='title-box'>
                        New
                    </div>
                    <div className='card-divider'>
                        
                    </div>
                </div>
                <div className="middle-container">
                    <div className='article-description'>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                    </div>
                    <div className='card-divider'>
                        
                    </div>
                </div>
                <div className='lower-container'>
                    <div className='tag-box'>AAPL</div>
                    <div className='tag-box'>TSLA</div>
                    <div className='tag-box'>ROKU</div>
                </div>
            </div>
        )
    }
}