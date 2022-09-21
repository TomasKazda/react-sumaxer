import React from 'react'
import "./Stats.css"

/* zkuste: className="stats" */
const Stats = () => (
    <aside className="stats endGame"> 
        <p>Tahů do konce: <span>10</span></p>
        <p>Ještě lze vybrat: <span>2</span></p>
        <p>Celkem bodů: <span>48</span></p>
    </aside>
)

export default Stats