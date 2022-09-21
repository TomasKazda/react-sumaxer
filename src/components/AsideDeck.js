import React from 'react';
import Card from './Card';
import "./AsideDeck.css";

const AsideDeck = () => {

    return (
      <section className="asideDeck">
          <Card />
          <Card />
          <div className="stats"><p><span>2</span></p></div>
      </section>
    )
}

export default AsideDeck