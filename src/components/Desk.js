import React from 'react';
import Card from './Card';
import DummyCard from './CardDummy' //jen pomůcka - není potřeba pro realizaci!
import "./Desk.css";

const Desk = () => {

    return (
      <section className="desk">
          <DummyCard />
          <DummyCard />
          <DummyCard />
          <Card />
          <Card />
          <DummyCard />
          <DummyCard />
          <DummyCard />
          <DummyCard />
      </section>
    )
}

export default Desk