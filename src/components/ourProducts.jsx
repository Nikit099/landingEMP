import React from 'react';
import './css/ourProducts.css';
import ivyStraing from './media/ivy-straing.svg';
import module from './media/module.svg';
import mockup from './media/mockup-smartphone.svg';
import halo from './media/gif/halo.gif';
import ghost from './media/gif/ghost.gif';
import exploadingHead from './media/gif/exploading-head.gif';


const OurProducts = () => {
    return (
        <div className='ourProducts'>
            <div className='oP'>
                <div className='oP-title-block'>
                    <div className='oP-title-block-title'>Наши продукты</div>
                    <div className='oP-title-block-subtitle'>Линейка продуктов, которые вы можете приобрести прямо сейчас</div>
                </div>
                <div className='oP-products'>
                    <div className='oP-products-product'>
                        <div className='oP-products-product-green-space'>
                            <div className='oP-products-product-photo'>
                                <img className='oP-prosucts-product-photo-img-ivy' src={ivyStraing} alt='ivy-straing'></img>
                            </div>
                            <div className='oP-products-product-title-block'>
                                <div className='oP-products-product-title-block-title'>Эмоциональный Цветочный Горшок</div>
                                <div className='oP-products-product-title-block-emoji'>
                                    <img className='oP-products-product-title-block-emoji-halo' 
                                         src={halo} 
                                         alt='halo'
                                    />
                                </div>
                            </div>
                            <div className='oP-products-product-description'>Основной продукт для крепкой эмоциональной связи с вашим любимцем. Эстетичный дизайн и продвинутые технологии... ахуенны</div>
                        </div>
                    </div>
                    <div className='oP-products-product'>
                        <div className='oP-products-product-green-space'>
                            <div className='oP-products-product-photo'>
                                <img className='oP-prosucts-product-photo-img-module' src={module} alt='module'/>
                            </div>
                            <div className='oP-products-product-title-block'>
                                <div className='oP-products-product-title-block-title'>Эмоциональный Цветочный Модуль</div>
                                <div className='oP-products-product-title-block-emoji'>
                                    <img className='oP-products-product-title-block-emoji-ghost' 
                                         src={ghost} 
                                         alt='ghost'
                                    />
                                </div>
                            </div>
                            <div className='oP-products-product-description'>Цветочный модуль простое решение в уходе за растением. Он подселяется к вашему питомцу, шпионит за ним, рассказывая вам о том, как у него дела. </div>
                        </div>
                    </div>
                    <div className='oP-products-product'>
                        <div className='oP-products-product-green-space'>
                            <div className='oP-products-product-photo'>
                                <img className='oP-prosucts-product-photo-img-mockup' src={mockup} alt='mockup' />
                            </div>
                            <div className='oP-products-product-title-block'>
                                <div className='oP-products-product-title-block-title'>Мобильное WEB приложение</div>
                                <div className='oP-products-product-title-block-emoji'>
                                    <img className='oP-products-product-title-block-emoji-exploading-head' 
                                         src={exploadingHead} 
                                         alt='exploadingHead'
                                    />
                                </div>
                            </div>
                            <div className='oP-products-product-description'>Мобильное WEB приложение не займет лишнее место на вашем телефоне и позволит всегда быть в курсе последних событий вашего питомца из любого уголка планеты.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurProducts;