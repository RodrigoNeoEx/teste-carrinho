import React, { useEffect } from 'react';
import {fetchFakeBellowAPI, fetchFakeAboveAPI} from '../services/requestAPI/fakeAPI'
import { useSelector, useDispatch } from 'react-redux';

const Cards = () => {
const productsBellow = useSelector(state => state.products.productsBellow);
const productsAbove = useSelector(state => state.products.productsAbove);
const dispatch = useDispatch();

useEffect(() => {
  async function fetchAPIS() {
    const request1 = await fetchFakeBellowAPI();
    const request2 = await fetchFakeAboveAPI();
    dispatch({ type: 'PRODUCTS_BELLOW', productsBellow: request1 })
    dispatch({ type: 'PRODUCTS_ABOVE', productsAbove: request2 })
  }
  fetchAPIS();
}, [dispatch]);

  const createBellowCards = () => {
  return  productsBellow.map((cardProducts) => {
      return (
        <div key={cardProducts.id}>
          <section>
            <h3>{cardProducts.name}</h3>
            <h4>{`R$ ${((cardProducts.price)/100).toFixed(2)}`}</h4>
            <h4>{`R$ ${((cardProducts.sellingPrice)/100).toFixed(2)}`}</h4>
          </section>
          <img src={cardProducts.imageUrl} alt="product"/>
        </div>
      )
    });
  }

  const createAboveCards = () => {
        return  productsAbove.map((cardProducts) => {
        return (
          <div key={cardProducts.id}>
            <section>
              <h3>{cardProducts.name}</h3>
              <h4>{`R$ ${((cardProducts.price)/100).toFixed(2)}`}</h4>
              <h4>{`R$ ${((cardProducts.sellingPrice)/100).toFixed(2)}`}</h4>
            </section>
            <img src={cardProducts.imageUrl} alt="product"/>
          </div>
        )
      });
    }

  const createAllCards = () => {
    if(productsBellow.length > 1 && productsAbove.length > 1) {
      return (
      <section>
        { createBellowCards() }
        { createAboveCards() }
      </section>
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
