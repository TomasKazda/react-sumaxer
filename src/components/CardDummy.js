import React from 'react'
import "./Card.css"

//jenom ukázka, že class ".selected" realizuje stav otočení!
const Card = () => (
    <figure className="item">
        <div className="face"><p>11</p></div>
        <div className="back"><div className="yin-yang"></div><p>SUMAxer</p></div>
    </figure>
)

export default Card
