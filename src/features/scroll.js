import store from '../store/store';
import { getProducts } from '../store/actions';

let scrollAllow = true;

export default function handleScroll() {
    if (scrollAllow) {
        scrollAllow = false;
        setTimeout(() => {
            scrollAllow = true;
        }, 1500);
    };

    if (window.pageYOffset + document.documentElement.clientHeight > document.documentElement.scrollHeight - 100) {
        store.dispatch(getProducts(
            store.getState().producsData.lastDoc, store.getState().producsData.isLoading
        ));
    };
};