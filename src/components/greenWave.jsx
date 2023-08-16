import React from 'react';
import './css/greenWave.css';
import sunglases from './media/gif/sunglases.gif';
import pleadingFace from './media/gif/pleading-face.gif';
import loveEyes from './media/gif/love-eyes.gif';
import alien from './media/gif/alien.gif';
import confidentSmile from './media/gif/confident-smile.gif';
import cowboy from './media/gif/cowboy.gif';
import crazy from './media/gif/crazy.gif';
import glasesMustage from './media/gif/glases-mustage.gif';
import heat from './media/gif/heat.gif';
import hug from './media/gif/hug.gif';
import illness from './media/gif/illness.gif';
import greenWave from './media/green-wave.svg';

const GreenWave = () => {
    return (
        <div>
            <div className='gW'>
            <img className='gW-img' src={greenWave} alt='greenWave'></img>
                <div className='central'>
                    <img className='img-pleadingFace' src={pleadingFace}/>
                    <img className='img-alien' src={alien}/>
                    <img className='img-confidentSmile' src={confidentSmile}/>
                    <img className='img-cowboy' src={cowboy}/>
                    <img className='img-crazy' src={crazy}/>
                    <img className='img-hug' src={hug}/>
                    <img className='img-glasesMustage' src={glasesMustage}/>
                    <div className='central-title'>
Большой набор реакций!
                    </div>
                    <div className='central-reactions'>
                        <div className='central-reaction-block'>
                            <div>
                                <img className='block-emoji' src={heat} alt='emoji'></img>
                            </div>
                            <div className='block-span'>
                                Жара
                            </div>
                        </div>
                        <div className='central-reaction-block'>
                            <div>
                                <img className='block-emoji' src={loveEyes} alt='emoji'></img>
                            </div>
                            <div className='block-span'>
                                Радость
                            </div>
                        </div>
                        <div className='central-reaction-block'>
                            <div>
                                <img className='block-emoji' src={illness} alt='emoji'></img>
                            </div>
                            <div className='block-span'>
                                Холод
                            </div>
                        </div>
                        <div className='central-reaction-block'>
                            <div>
                                <img className='block-emoji' src={sunglases} alt='emoji'></img>
                            </div>
                            <div className='block-span'>
                                Солнечно
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GreenWave;