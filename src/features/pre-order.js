import React, { useState, useEffect } from 'react';
import { db } from '../firebase/firebase-info';
import checkEmailValid from './checkEmailValid';

const collection = db.collection('pre-order');

function PreOrder(props) {

    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [ml, setMl] = useState(-100);

    useEffect(() => {
        setTimeout(() => { setMl(0) }, 0);
        document.body.style.overflow = 'hidden';
    }, [])

    function onClosePopUp(e) {
        if (e.target === e.currentTarget) {
            document.body.style.overflow = '';
            setMl(100);
            setTimeout(() => { props.closePopUp() }, 400);
        };
    };

    function handleChangeEmail(e) {
        setEmail(e.target.value);
        setError('');
    };

    function onSubmit(e) {
        e.preventDefault();
        if (checkEmail()) {
            setIsLoading(true);
            collection.add({
                time: Date.now().toString(),
                email: email,
                prodId: props.prodId,
            }).then(
                setIsLoading(false),
                props.closePopUp()
            )
        };
    };

    function checkEmail() {
        if (email === '') {
            setError('Enter email');
            return false;
        }
        if (!checkEmailValid(email)) {
            setError('Enter correct email')
            return false;
        }
        return true;
    }

    return (
        <div className='popUp-window'
            onClick={(e) => { onClosePopUp(e) }}>
            <div className='popUp-box-wrapper'>
                <div className='popUp-box'
                    style={{ marginLeft: ml + 'vw' }}>
                    < button className='popUp-close'
                        onClick={(e) => { onClosePopUp(e) }}>
                        ☓
                </button>
                    <form onSubmit={(e) => { onSubmit(e) }}>
                        <div className='popUp-form'>
                            <label className='popUp-title'
                                htmlFor='updates'>
                                Subscribe for updates:
                        </label>
                            <input className='popUp-input'
                                type='text'
                                id="updates"
                                placeholder='Enter email here'
                                value={email}
                                onChange={(e) => { handleChangeEmail(e) }}
                                onFocus={() => { setError('') }} />
                            <span className='popUp-error'>
                                {error}
                            </span>
                            <span>No spam, only important stuff</span>
                            {isLoading ?
                                <button className='popUp-button'
                                    type='submit'
                                    disabled>
                                    Subscribe
                            </button> :
                                <button className='popUp-button'
                                    type='submit'>
                                    Subscribe
                            </button>}

                        </div>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default PreOrder;