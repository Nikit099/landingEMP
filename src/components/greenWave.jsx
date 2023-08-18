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
                <img className='gW-green-wave-img-svg-itself' src={greenWave} alt='greenWave'></img>
                <img className='gW-img-pleadingFace' src={pleadingFace}/>
                <img className='gW-img-alien' src={alien}/>
                <img className='gW-img-confidentSmile' src={confidentSmile}/>
                <img className='gW-img-cowboy' src={cowboy}/>
                <img className='gW-img-crazy' src={crazy}/>
                <img className='gW-img-hug' src={hug}/>
                <img className='gW-img-glasesMustage' src={glasesMustage}/>
                <div className='gW-central'>    
                    
                    <div className='gW-central-title'>
Большой набор реакций!
                    </div>
                    <div className='gW-central-emojies'>
                        <div className='gW-central-emojies-block'>
                            <div>
                                <img className='gW-central-emojies-block-emoji' src={heat} alt='emoji'></img>
                            </div>
                            <div className='gW-central-emojies-block-span'>
                                Жара
                            </div>
                        </div>
                        <div className='gW-central-emojies-block'>
                            <div>
                                <img className='gW-central-emojies-block-emoji' src={loveEyes} alt='emoji'></img>
                            </div>
                            <div className='gW-central-emojies-block-span'>
                                Радость
                            </div>
                        </div>
                        <div className='gW-central-emojies-block'>
                            <div>
                                <img className='gW-central-emojies-block-emoji' src={illness} alt='emoji'></img>
                            </div>
                            <div className='gW-central-emojies-block-span'>
                                Холод
                            </div>
                        </div>
                        <div className='gW-central-emojies-block'>
                            <div>
                                <img className='gW-central-emojies-block-emoji' src={sunglases} alt='emoji'></img>
                            </div>
                            <div className='gW-central-emojies-block-span'>
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