import React from 'react'
import "../css/Home.css"
import Cv from "../images/Cv.pdf"

function Home() {
    return (
        <div className='home'>
            <h1> Huseynli <span>Togrul</span> </h1>
            <p><span>Web</span> Developer</p>
            <a href={Cv}>Download Cv</a>
        </div>
    )
}



export default Home