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
        <div className='footeElements-wrapper'>
          <span>E-mail: info@revolna.com</span>
          <p>*in Pro version</p>
        </div>
        <div className='footeElements-wrapper'>
          <a className='fa fa-twitter'
            href='https://twitter.com/revolnaenergy'
            role='link'>
            <span>
              @revolnaenergy
            </span>
          </a>
          <a className="fa fa-instagram"
            href='https://www.instagram.com/revolna_workshop/'
            role='link'>
            <span>
              @revolna_workshop
            </span>
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
