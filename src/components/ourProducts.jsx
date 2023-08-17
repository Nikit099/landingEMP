

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
                                <div className='product-title'>Эмоциональный Цветочный Модуль</div>
                                <div className='product-title-block-emoji'></div>
                            </div>
                            <div className='product-description'>Цветочный модуль простое решение в уходе за растением. Он подселяется к вашему питомцу, шпионит за ним, рассказывая вам о том, как у него дела. </div>
                        </div>
                    </div>
                    <div className='product'>
                        <div className='product-green-space'>
                            <div className='product-photo'>
                                <img className='product-photo-img' src={mockup} alt='mockup' />
                            </div>
                            <div className='product-title-block'>
                                <div className='product-title'>Мобильное WEB приложение</div>
                                <div className='product-title-block-emoji'></div>
                            </div>
                            <div className='product-description'>Мобильное WEB приложение не займет лишнее место на вашем телефоне и позволит всегда быть в курсе последних событий вашего питомца из любого уголка планеты.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurProducts;