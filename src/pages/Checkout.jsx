import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'
import '../style/components/Cards/cards.css';
import '../style/variables/var.css';
import '../style/components/CardsContainer/cardsContainer.css';

const Checkout = () => {
const cart = useSelector(state => state.cart.cart);
const [, updateState] = useState()
const forceUpdate = useCallback(() => updateState({}), [])
const handle = () => {
  forceUpdate()
}

  const createCheckoutCards = () => {
    return  cart.map((card, index) => {
      return (
        <CardGroup>
          <Card key={card.name}>
          <Card.Img variant="top" src={card.image} alt="product" />
            <Card.Body>
              <Card.Title>{card.product}</Card.Title>
              <Card.Text style={{ textDecoration: 'line-through' }}>{`R$ ${card.dPrice}`}</Card.Text>
              <Card.Text id={`teste-${index}`}>{`R$ ${card.price}`}</Card.Text>
            </Card.Body>
            <section>
              <button type="button" onClick={() => { if(card.count > 0) { card.count = card.count- 1
              handle() }}  }> - </button>
              <span>{`qnt: ${card.count}`}</span>
              <button type="button" onClick={() => {card.count = card.count + 1
              handle() }}> + </button>
            </section>
          </Card>
        </CardGroup>
      );
    });
  }

  const getTotal = () => {
    let sum = 0;
    cart.forEach(({ count, price }) => {
      sum += (count * price);
    });
    return parseFloat(sum).toFixed(2);
  }

  return (
    <>
    <Header />
    <hr/>
      <section>
        { createCheckoutCards() }
      </section>
    <hr/>
      <section>
        <p>Total</p>
        <p> {`R$ ${getTotal()}`} </p>
      </section>
      { getTotal() > 10 && <span>Parabéns, sua compra tem frete grátis</span>}
    <hr/>
      <button type="button">Finalizar Compra</button>
    </>
  )
}

export default Checkout;
