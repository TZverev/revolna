import React from 'react';
import { Provider } from 'react-redux';
import ProductAreaLoader from './main-page/product-area';
import './styles/css/main.css';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <header>
        <h1>
          Revolna.com <span>{'Apps &  Hardware for Green Energy'}</span>
        </h1>
      </header>
      <ProductAreaLoader />
    </Provider>
  );
}

export default App;
