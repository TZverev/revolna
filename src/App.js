import React from 'react';
import ProductArea from './main-page/product-area';
import './styles/css/main.css';
import './styles/css/mobile.css';
import productsData from './store/content';

function App() {
  return (
    <>
      <header className='globalHeader'>
        <h1>
          Revolna.com <span><br />{'Apps &  Hardware for Green Energy'}</span>
        </h1>
      </header>
      <ProductArea productsData={productsData} />
      <footer className='globalFooter'>
        <span>E-mail: info@revolna.com</span>
        <p>*in Pro version</p>
        <div className='socialNetworks-wrapper'>
          <a href='https://twitter.com/revolnaenergy'>
            @revolnaenergy
          </a>
          <a href='https://www.instagram.com/revolna_workshop/'>
            @revolna_workshop
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
