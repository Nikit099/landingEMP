import React from 'react';
import './css/greenWave.css';
import testEmoji from './media/test-emoji.gif';
import greenWave from './media/green-wave.svg';

const GreenWave = () => {
    return (
        <div>
            <div className='gW'>
            <img className='gW-img' src={greenWave} alt='greenWave'></img>
                <div className='central'>
                    <div className='central-title'>
Большой набор реакций!
                    </div>
                    <div className='central-reactions'>
                        <div className='central-reaction-block'>
                            <div>
                                <img className='block-emoji' src={testEmoji} alt='emoji'></img>
                            </div>
                            <div className='block-span'>
                                Жара
                            </div>
                        </div>
                        <div className='central-reaction-block'>
                            <div>
                                <img className='block-emoji' src={testEmoji} alt='emoji'></img>
                            </div>
                            <div className='block-span'>
                                Жара
                            </div>
                        </div>
                        <div className='central-reaction-block'>
                            <div>
                                <img className='block-emoji' src={testEmoji} alt='emoji'></img>
                            </div>
                            <div className='block-span'>
                                Жара
                            </div>
                        </div>
                        <div className='central-reaction-block'>
                            <div>
                                <img className='block-emoji' src={testEmoji} alt='emoji'></img>
                            </div>
                            <div className='block-span'>
                                Жара
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GreenWave;