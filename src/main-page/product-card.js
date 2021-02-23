import React, { useState } from 'react';
import PreOrder from '../features/pre-order';
import googlePlayImg from '../img/google_get_on.png';
import huaweiImg from '../img/huawei_get_on.png';

function ProductCardButtons(props) {
    const data = props.data;
    const style = `card${data.id}-btn`;
    const [isPreOrderInput, setIsPreOrderInput] = useState(false);

    function openPopUp() {
        setIsPreOrderInput(true);
    }

    function closePopUp() {
        setIsPreOrderInput(false);
    }

    if (data.isReleased) {
        return (
            <div>
                {data.googleLink &&
                    <a href={data.googleLink}>
                        <img alt='Get it on GooglePlay'
                            src={googlePlayImg}
                            className={style} />
                    </a>}
                {data.huaweiLink &&
                    <a href={data.huaweiLink}>
                        <img alt='Explore it on AppGallary'
                            src={huaweiImg}
                            className={style} />
                    </a>}
            </div>
        );
    } else {
        return (
            <>
                <button className={style}
                    onClick={openPopUp}>
                    Make pre-order
                </button>
                {
                    isPreOrderInput &&
                    <PreOrder closePopUp={closePopUp} prodId={data.id} />
                }
            </>
        )
    }
};

function ProductCard(props) {
    const data = props.data;
    return (
        <div className={`prodCard card${data.id}`}>
            <header>
                <div className='h2-wrapper'>
                    <h2>
                        {data.name}
                    </h2>
                </div>
                <hr />
            </header>
            <div className='img-wrapper'>
                <img src={data.img}
                    alt={data.name}
                    className='prodIcon' />
            </div>
            <div>
                <p>
                    {data.description}
                </p>
                <ProductCardButtons data={data} />
            </div>
        </div>
    );
};

export default ProductCard;