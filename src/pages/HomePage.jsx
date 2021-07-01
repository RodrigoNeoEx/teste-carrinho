import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Searcher from '../components/Searcher';
import Carrousel from '../components/Corrousel';
// import Banner from '../components/Banner';
import CardConteiner from '../components/CardConteiner';
// import Footer from '../components/Footer';


const HomePage = () => {
  return(
    <div>
      <Header />
      <Searcher />
      <main>
        <section>
          <Carrousel />
          {/* <Banner /> */}
        </section>
        <CardConteiner />
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default connect()(HomePage);
