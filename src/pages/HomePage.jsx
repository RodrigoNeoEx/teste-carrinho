import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Searcher from '../components/Searcher';
import Carrousel from '../components/Corrousel';
import CardConteiner from '../components/CardConteiner';

const HomePage = () => {
  return(
    <div>
      <Header />
      <Searcher />
      <main>
        <section>
          <Carrousel />
        </section>
        <CardConteiner />
      </main>
    </div>
  )
}

export default connect()(HomePage);
