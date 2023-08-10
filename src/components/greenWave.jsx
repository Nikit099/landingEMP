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

                    </div>
                    <div className='central-reactions'>
                        <div className='central-reactions-block-1'>
                            <img src={testEmoji} alt='emoji'></img>
                            <span>эмоция блевотны! Ура!</span>
                        </div>
                        <div className='central-reactions-block-2'>
                            <img src={testEmoji} alt='emoji'></img>
                            <span>эмоция блевотны! Ура!</span>
                        </div>
                        <div className='central-reactions-block-3'>
                            <img src={testEmoji} alt='emoji'></img>
                            <span>эмоция блевотны! Ура!</span>
                        </div>
                        <div className='central-reactions-block-4'>
                            <img src={testEmoji} alt='emoji'></img>
                            <span>эмоция блевотны! Ура!</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GreenWave;