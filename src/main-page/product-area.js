import React from 'react';
import ProductCard from './product-card';


function ProductArea(props) {
    const storage = props.productsData;

    return (
        <div className='prodArea'>
            {storage.map((prod) => {
                return (
                    <ProductCard data={prod} key={prod.id} />
                )
            })}
        </div>
    );
};

export default ProductArea;

