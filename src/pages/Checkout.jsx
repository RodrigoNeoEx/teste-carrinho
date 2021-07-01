import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import '../style/components/Cards/cards.css';
import '../style/variables/var.css';
import '../style/components/CardsContainer/cardsContainer.css';
import '../style/components/Checkout/checkout.css';

const Checkout = () => {
const cart = useSelector(state => state.cart.cart);
const [, updateState] = useState()
const forceUpdate = useCallback(() => updateState({}), [])

const handleUpdate = () => {
  forceUpdate()
}

  const createCheckoutCards = () => {
    return  cart.map((card, index) => {
      return (
        <>
          <Card key={card.name}>
          <Card.Img variant="top" src={card.image} alt="product" />
            <Card.Body>
              <Card.Title>{card.product}</Card.Title>
              <Card.Text style={{ textDecoration: 'line-through' }}>{`R$ ${card.dPrice}`}</Card.Text>
              <Card.Text id={`teste-${index}`}>{`R$ ${card.price}`}</Card.Text>
            </Card.Body>
            <section className="checkout--buttons">
              <button className="checkout--buttons--btn" type="button" onClick={() => { if(card.count > 0) { card.count = card.count- 1
              handleUpdate() }}  }> - </button>
              <span>{`qnt: ${card.count}`}</span>
              <button className="checkout--buttons--btn" type="button" onClick={() => {card.count = card.count + 1
              handleUpdate() }}> + </button>
            </section>
          </Card>
        </>
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
    <Header/>
    <hr/>
      <section className="checkout--cards">
        { createCheckoutCards() }
      </section>
    <hr/>
      <section className="checkout--total">
        <p>Total</p>
        <p> {`R$ ${getTotal()}`} </p>
      </section >
      { getTotal() > 10 && <Alert variant="success">Parabéns, sua compra tem frete grátis</Alert>}
    <hr/>
      <Button variant="primary" size="lg" block type="button">Finalizar Compra</Button>
    </>
  )
}

export default Checkout;
