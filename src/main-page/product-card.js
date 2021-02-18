import React from 'react';
import logo from '../img/JczxH9FkieE.jpg';

function ProductCard(props) {
    return (
        <div className='productCard'>
            <h2>
                {props.data.name}
            </h2>
            <img className='productIcon' src={logo} />
            <p>
                {props.data.description}
            </p>


            {!props.data.isReleased ?
                <button>
                    Make pre-order
                </button>
                :
                <a href='https://play.google.com/store/apps/details?id=com.revolve44.solarpanelx&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
                    <img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' />
                </a>
            }

        </div>
    );
};

export default ProductCard;