import React from 'react';
import ProductCard from './product-card';

function ProductArea() {
    return (
        <section className='productArea'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </section>
    );
};

export default ProductArea;

