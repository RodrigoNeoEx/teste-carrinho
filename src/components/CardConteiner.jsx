import React from 'react';
import Cards from './Cards';
import CardGroup from 'react-bootstrap/CardGroup';
import '../style/components/CardsContainer/cardsContainer.css';

const CardConteiner = () => {
  return (
    <CardGroup>
      <Cards />
    </CardGroup>
    )
}

export default CardConteiner;