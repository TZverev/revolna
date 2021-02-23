import React from 'react';
import ProductArea from './main-page/product-area';
import './styles/css/main.css';
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
        E-mail: info@revolna.com
      </footer>
    </>
  );
}

export default App;
