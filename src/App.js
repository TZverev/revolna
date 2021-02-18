import React from 'react';
import { Provider } from 'react-redux';
import ProductArea from './main-page/product-area';
import './styles/css/main.css';
import store from './store/store';


function App() {
  return (
    <Provider store={store}>
      <header>
        <h1>
          Revolna.com
        </h1>
      </header>
      <ProductArea />
    </Provider>
  );
}

export default App;
