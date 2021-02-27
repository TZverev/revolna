import AriaModal from 'react-aria-modal';
import React, { useState, useEffect } from 'react';
import { db } from '../firebase/firebase-info';
import checkEmailValid from './checkEmailValid';

const collection = db.collection('pre-order');

function PreOrderMessage(props) {
    return (
        <div className='modal-form'>
            <label htmlFor='ok'
                id='pre-order-input'
                className='message'>
                {props.message}
            </label>
            <button onClick={props.closeModal}
                className='modal-button'
                id='ok'>
                Ok
        </button>
        </div>
    );
};

function PreOrderModal(props) {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const [doneMessage, setDoneMessage] = useState('');

    const [ml, setMl] = useState(-100);

    useEffect(() => {
        setTimeout(() => { setMl(0) }, 0);
    }, []);

    function onCloseModal() {
        setMl(100);
        setTimeout(() => { props.closeModal() }, 400);
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
                setDoneMessage('Thanks for request. We will notify you about the possibility of ordering within a week.')
            )
        };
    };

    function checkEmail() {
        if (email === '') {
            setError('Enter email');
            return false;
        };
        if (!checkEmailValid(email)) {
            setError('Enter correct email')
            return false;
        };
        return true;
    };

    return (
        <AriaModal
            titleId='#pre-order-input'
            onExit={onCloseModal}
            initialFocus="#pre-order-input"
            underlayClass='modal-window'
        >

            <div className='modal-body-wrapper'>
                <div className='modal-body'
                    style={{ marginLeft: ml + 'vw' }}>
                    < button className='modal-closeBtn'
                        aria-label='Close menu'
                        onClick={onCloseModal}>
                        ☓
                        </button>
                    {doneMessage ?
                        <PreOrderMessage message={doneMessage}
                            closeModal={onCloseModal} /> :
                        <form onSubmit={(e) => { onSubmit(e) }}>
                            <div className='modal-form'>
                                <label className='modal-title'
                                    id='pre-order-input'
                                    htmlFor='updates'>
                                    Subscribe for updates:
                                </label>
                                <input className='modal-input'

                                    type='email'
                                    id="updates"
                                    placeholder='Enter email here'
                                    value={email}
                                    onChange={(e) => { handleChangeEmail(e) }}
                                    required />
                                <span className='modal-error'>
                                    {error}
                                </span>
                                <span>No spam, only important stuff</span>
                                {isLoading ?
                                    <button className='modal-button'
                                        type='submit'
                                        disabled>
                                        Subscribe
                                    </button> :
                                    <button className='modal-button'
                                        type='submit'>
                                        Subscribe
                                </button>}
                            </div>
                        </form>
                    }
                </div>
            </div>

        </AriaModal>
    );
};

export default PreOrderModal;