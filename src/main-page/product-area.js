import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ProductCard from './product-card';

import { getProducts } from '../store/actions';

function ProductArea(props) {
    return (
        <div>
            <button onClick={() => {
                props.onGetProducts(
                    props.productStore.lastDoc,
                    props.productStore.isLoading)
            }}>get</button>
            <section className='productArea'>
                {props.productStore.data.map((prod) => {
                    return (
                        <ProductCard data={prod} key={prod.id} />
                    )
                })}
            </section>
        </div >
    );
};

export default connect(
    state => ({
        productStore: state.producsData
    }),
    dispatch => ({
        onGetProducts: (lastDoc, isLoading) => {
            dispatch(getProducts(lastDoc, isLoading));
        }
    })
)(ProductArea);

