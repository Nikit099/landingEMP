import React from 'react';
import './css/whiteWave.css';
import earth from './media/earth.svg';
import plant from './media/plant.svg';
import happy from './media/happy-walking-plant.svg';

const WhiteWave = () => {
    return (
        <div>
            <div className='wW-main'>
                <div className='wW-main-grid-1'>
                    <div className='wW-main-img'>
                        <img src={plant} alt='icon-plant'></img>
                    </div>
                    <div className='wW-main-title'>привет</div>
                    <div className='wW-main-empty'></div>
                    <div className='wW-main-text'></div>
                </div>
                <div className='wW-main-grid-2'>
                    <div className='wW-main-img'>
                        <img src={happy} alt='icon-happy-plant'></img>
                    </div>
                    <div className='wW-main-title'></div>
                    <div className='wW-main-empty'></div>
                    <div className='wW-main-text'></div>
                </div>
                <div className='wW-main-grid-3'>
                    <div className='wW-main-img'>
                        <img src={earth} alt='icon-earth'></img>
                    </div>
                    <div className='wW-main-title'></div>
                    <div className='wW-main-empty'></div>
                    <div className='wW-main-text'></div>
                </div>
            </div>
        </div>
    );
};

export default WhiteWave;