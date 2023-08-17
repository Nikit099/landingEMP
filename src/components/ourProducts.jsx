

import React from 'react';
import './css/ourProducts.css';
import ivyStraing from './media/ivy-straing.svg';
import module from './media/module.svg';
import mockup from './media/mockup-smartphone.svg';

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
                        <div className='product-green-space'>
                            <div className='product-photo'>
                                <img className='product-photo-img' src={ivyStraing} alt='ivy-straing'></img>
                            </div>
                            <div className='product-title-block'>
                                <div className='product-title'>Эмоциональный Цветочный Горшок</div>
                                <div className='product-title-block-emoji'></div>
                            </div>
                            <div className='product-description'>Основной продукт для крепкой эмоциональной связи с вашим любимцем. Эстетичный дизайн и продвинутые технологии... ахуенны</div>
                        </div>
                    </div>
                    <div className='product'>
                        <div className='product-green-space'>
                            <div className='product-photo'>
                                <img className='product-photo-img' src={module} alt='module'/>
                            </div>
                            <div className='product-title-block'>
                                <div className='product-title'></div>
                                <div className='product-title-block-emoji'></div>
                            </div>
                            <div className='product-description'></div>
                        </div>
                    </div>
                    <div className='product'>
                        <div className='product-green-space'>
                            <div className='product-photo'>
                                <img className='product-photo-img' src={mockup} alt='mockup' />
                            </div>
                            <div className='product-title-block'>
                                <div className='product-title'></div>
                                <div className='product-title-block-emoji'></div>
                            </div>
                            <div className='product-description'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurProducts;