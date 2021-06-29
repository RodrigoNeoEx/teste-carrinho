import React from 'react';
import Header from '../components/Header';
import Searcher from '../components/Searcher';
import Cart from '../components/Cart';
import Carrousel from '../components/Corrousel';
import Banner from '../components/Banner';
import CardConteiner from '../components/CardConteiner';
import Footer from '../components/Footer';


const HomePage = () => {
  return(
    <content>
      <Header name="homepage"/>
      <section>
        <Searcher />
        <Cart />
      </section>
      <main>
        <section>
          <Carrousel />
          <Banner />
        </section>
        <CardConteiner />
      </main>
      <Footer />
    </content>
  )
}

export default HomePage;
