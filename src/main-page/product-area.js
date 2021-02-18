import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ProductCard from './product-card';
import { getProducts } from '../store/actions';
import handleScroll from '../features/scroll';


function ProductArea(props) {
    const storage = props.productStore;

    useEffect(() => {
        props.onGetProducts(storage.lastDoc, storage.isLoading);
        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='productsArea'>
            {storage.data.map((prod) => {
                return (
                    <ProductCard data={prod} key={prod.id} />
                )
            })}
        </div>
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

