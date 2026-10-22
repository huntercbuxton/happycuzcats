import React from 'react'
import './placeholderpage.css'


function FunnyGifs() {
    return (
        <React.Fragment>
            <img src="img/funny/cute-cat.gif" alt="cute cat" />
            <img src="img/funny/crazy-cat.gif" alt="crazy cat" />
            <img src="img/funny/creamer-cat.gif" alt="cat with coffee creamer on ears" /> 
            <img src="img/funny/happy-cat.gif" alt="happy cat" />
            <img src="img/funny/cat-tired.gif" alt="tired cat" />
            <img src="img/funny/cat-playing-with-blanket.gif" alt="cat playing with blanket" />
            <img src="img/funny/cute-cat.gif" alt="cute cat" /> 
            <img src="img/funny/crazy-cat.gif" alt="crazy cat" />
            <img src="img/funny/creamer-cat.gif" alt="cat with coffee creamer on ears" />
            <img src="img/funny/cat-cat-dance.gif" alt="dancing cat" />
            <img src="logo_blue_yellow.png" alt="Description" /> 
            <img src="img/funny/manicure-cat.gif" alt="manicure cat" />
            <img src="img/funny/angry-cat.gif" alt="angry cat" />                
            <img src="img/funny/sharkcat-memecoin.gif" alt="shark cat" />
            <img src="img/funny/cat.gif" alt="cat" />
            <img src="img/funny/rigby-rigby-cat.gif" alt="rigby rigby cat" />
            <img src="img/funny/sleepy-cat.gif" alt="sleepy cat" />
            <img src="img/funny/coffee-cat.gif" alt="coffee cat" />
            <img src="logo_yellow_blue.png" alt="Description" />
        </React.Fragment>
    )
}

export default function PlaceholderPage() {

    return (
        <>
            <div id="banner-container">
                <img id="banner" src="banner.png" />
                <h1 id="banner-title">Cat cafe coming soon to Provo, UT</h1> 
            </div>
            
            <div className="image-grid"> 
                <FunnyGifs/>
                <FunnyGifs/>
            </div>
        </>
    )
}

