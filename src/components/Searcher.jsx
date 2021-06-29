import React from 'react';
import { FaSearch } from "react-icons/fa";
import '../style/components/Searcher/searcher.css';

const Searcher = () => {
  return (
    <section className="search">
      <input className="search--input" type="text" placeholder="Pesquisar produto"/>
      <button className="search--btn" type="button">
        <FaSearch/>
      </button>
    </section>
  )
}

export default Searcher;
