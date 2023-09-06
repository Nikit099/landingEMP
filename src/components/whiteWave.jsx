import React from 'react';
import './css/whiteWave.css';
import earth from './media/earth.svg';
import plant from './media/plant.svg';
import happy from './media/happy-walking-plant.svg';

const WhiteWave = () => {
    return (
        <div className='whiteWave'>
            <div className='wW-main'>
                <div className='wW-main-grid-1'>
                    <div className='wW-main-grid-img-1'>
                        <img className='wW-main-grid-img-itself-1' src={plant} alt='icon-plant'></img>
                    </div>
                    <div className='wW-main-grid-title-1'>
                        <span className='wW-main-grid-title-span-1'>
                        Индивидуально для разных растений
                        </span>
                    </div>
                    <div className='wW-main-grid-empty-1'>
                        <span className='wW-main-grid-empty-span-1'>

                        </span>
                    </div>
                    <div className='wW-main-grid-text-1'>
                        <span className='wW-main-grid-text-span-1'>
                        Выбери свое растение в настройках. Умный горшок будет анализировать окружающую среду во времени, показывая состояние вашего питомца. 
                        </span>
                    </div>
                </div>
                <div className='wW-main-grid-2'>
                    <div className='wW-main-grid-img-2'>
                        <img className='wW-main-grid-img-itself-2' src={happy} alt='icon-happy-plant'></img>
                    </div>
                    <div className='wW-main-grid-title-2'>
                        <span className='wW-main-grid-title-span-2'>
                        Заботьтесь и радуйтесь
                        </span>
                    </div>
                    <div className='wW-main-grid-empty-2'>
                        <span className='wW-main-grid-empty-span-2'>

                        </span>
                    </div>
                    <div className='wW-main-grid-text-2'>
                        <span className='wW-main-grid-text-span-2'>
                        Наблюдая реакции  на окружающую среду и почву, вы всегда будете знать,  как порадовать вашего любимца. А оно будет радовать вас.
                        </span>
                    </div>
                </div>
                <div className='wW-main-grid-3'>
                    <div className='wW-main-grid-img-3'>
                        <img className='wW-main-grid-img-itself-3' src={earth} alt='icon-earth'></img>
                    </div>
                    <div className='wW-main-grid-title-3'>
                        <span className='wW-main-grid-title-span-3'>
                        Будьте всегда на связи
                        </span>
                    </div>
                    <div className='wW-main-grid-empty-3'>
                        <span className='wW-main-grid-empty-span-3'>

                        </span>
                    </div>
                    <div className='wW-main-grid-text-3'>
                        <span className='wW-main-grid-text-span-3'>
                        С нашим приложением вы в любой точке мира сможете узнать как дела у вашего любимца и даже пообщаться с ним!
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhiteWave;