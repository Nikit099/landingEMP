

import React from 'react';
import './css/header.css';
import ivyPhoto from './media/ivyPhoto.svg';

const OurProducts = () => {
    return (
        <div>
            <div className='our-products-main'>
                <div className='title-block'>
                    <div className='title'>Наши продукты</div>
                    <div className='subtitle'>Линейка продуктов, которые вы можете приобрести прямо сейчас</div>
                </div>
                <div className='products'>
                    <div className='product'>
                        <div className='product-photo'></div>
                        <div className='product-title-block'>
                            <div className='product-title'></div>
                            <div className='product-title-block-emoji'></div>
                        </div>
                        <div className='product-description'></div>
                    </div>
                    <div className='product'>
                        <div className='product-photo'></div>
                        <div className='product-title-block'>
                            <div className='product-title'></div>
                            <div className='product-title-block-emoji'></div>
                        </div>
                        <div className='product-description'></div>
                    </div>
                    <div className='product'>
                        <div className='product-photo'></div>
                        <div className='product-title-block'>
                            <div className='product-title'></div>
                            <div className='product-title-block-emoji'></div>
                        </div>
                        <div className='product-description'></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurProducts;