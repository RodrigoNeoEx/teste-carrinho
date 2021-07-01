import React, { useEffect } from 'react';
import {fetchFakeBellowAPI, fetchFakeAboveAPI} from '../services/requestAPI/fakeAPI';
import { useSelector, useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';
import '../style/components/Cards/cards.css';
import '../style/variables/var.css';

const Cards = () => {
const productsBellow = useSelector(state => state.products.productsBellow);
const productsAbove = useSelector(state => state.products.productsAbove);
const dispatch = useDispatch();

useEffect(() => {
  async function fetchAPIS() {
    const request1 = await fetchFakeBellowAPI();
    const request2 = await fetchFakeAboveAPI();
    dispatch({ type: 'PRODUCTS_BELLOW', productsBellow: request1 });
    dispatch({ type: 'PRODUCTS_ABOVE', productsAbove: request2 });
  }
  fetchAPIS();
}, [dispatch]);

  const createBellowCards = () => {
  return  productsBellow.map((cardProducts) => {
      return (
        <Card key={cardProducts.id}>
        <Card.Img variant="top" src={cardProducts.imageUrl} alt="product" />
          <Card.Body>
            <Card.Title>{cardProducts.name}</Card.Title>
            <Card.Text style={{ textDecoration: 'line-through' }}>{`De R$ ${((cardProducts.price)/100).toFixed(2)}`}</Card.Text>
            <Card.Text>{`Por R$ ${((cardProducts.sellingPrice)/100).toFixed(2)}`}</Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
      );
    });
  };

  const createAboveCards = () => {
    return  productsAbove.map((cardProducts) => {
      return (
        <Card style={{ width: '11rem' }} key={cardProducts.id}>
        <Card.Img variant="top" src={cardProducts.imageUrl} alt="product" />
          <Card.Body>
            <Card.Title>{cardProducts.name}</Card.Title>
            <Card.Text style={{ textDecoration: 'line-through' }}>{`De R$ ${((cardProducts.price)/100).toFixed(2)}`}</Card.Text>
            <Card.Text>{`Por R$ ${((cardProducts.sellingPrice)/100).toFixed(2)}`}</Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
      );
    });
  };

  const createAllCards = () => {
    if(productsBellow.length > 1 && productsAbove.length > 1) {
      return (
      <>
        { createBellowCards() }
        { createAboveCards() }
      </>
      );
    };
  };

  return (
    <>
      { createAllCards() }
    </>
  );
}

export default Cards;
