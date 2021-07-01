import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../style/images/logo.png';
import { RiShoppingCartLine } from "react-icons/ri";
import '../style/components/header/header.css'

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
    <header className="header">
      <div className="header--container">
        <img className="header--img" src={logo} alt="Logo CodeBy"/>
        <h1 className="header--title">{ headerTitle() }</h1>
      </div>
      <nav className="header--nav">
        <Link className="header--link" href="/">Home</Link>
        <Link className="header--link" href="/register">Cadastro</Link>
        <Link className="header--link" href="/checkout">Checkout</Link>
        <Link className="header--link cart" href="/cart">
          <RiShoppingCartLine />
          <span>{ updateCounter() }</span>
        </Link>
      </nav>
    </header>
  )
}

export default Header;