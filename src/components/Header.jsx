import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../style/images/logo.png';
import { RiShoppingCartLine } from "react-icons/ri";

const Header = () => {

const location = useLocation().pathname

const headerTitle = () => {
  switch (location) {
    case 'register':
      return 'Cadastre-se';
    case 'checkout':
      return 'Finalizar Compras';
    case 'cart':
      return 'Carrinho';
    case 'details':
      return 'Detalhes do Produto';
    default:
      return 'Teste Carrinho';
  }
};

  const updateCounter = () => {
    const counter = 0
    return counter
  }

  return (
    <header>
      <container>
        <img src={logo} alt="Logo CodeBy"/>
        <h1>{ headerTitle() }</h1>
      </container>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/register">Cadastro</Link>
        <Link href="/checkout">Checkout</Link>
        <Link href="/cart">
          <RiShoppingCartLine />
          <span>{ updateCounter() }</span>
        </Link>
      </nav>
    </header>
  )
}

export default Header;