import { db } from '../firebase/firebase-info';

function ProductData(doc) {
    this.id = doc.id;
    this.name = doc.data().name;
    this.description = doc.data().description;
    this.link = doc.data().link;
    this.isReleased = doc.data().isReleased;
}

export const getProducts = (lastDoc, isLoading) => dispatch => {
    let productsRef = db.collection('products').orderBy('isReleased', 'desc').limit(1);
    let productsArray = [];

    dispatch({
        type: 'FETCH_PRODUCTS_START',
    });

    if (!isLoading) {
        if (lastDoc !== null) {
            productsRef = productsRef.startAfter(lastDoc);
        }
        productsRef.get().then((info) => {
            if (info.size === 0) {
                return
            }
            info.docs.map((doc) => {
                productsArray.push(new ProductData(doc));
            });

            dispatch({
                type: 'FETCH_PRODUCTS_SUCCESS',
                data: productsArray,
                lastDoc: info.docs[info.docs.length - 1],
            });
        });
    };
};

