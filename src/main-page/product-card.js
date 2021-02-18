import React from 'react';

function ProductCard(props) {
    return (
        <div className='productCard'>
            <h3>
                {props.data.name}
            </h3>
            <p>
                {props.data.description}
            </p>
        </div>
    );
};

export default ProductCard;