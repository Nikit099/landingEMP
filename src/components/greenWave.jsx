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
        <div className='greenWave'>
            <div className='gW'>
                <img className='gW-green-wave-img-svg-itself' src={greenWave} alt='greenWave'></img>
                <div className='gW-corner-imges'>
                    <img className='gW-corner-imges-img-pleadingFace' src={pleadingFace} alt='corner-img-emoji' />
                    <img className='gW-corner-imges-img-alien' src={alien} alt='corner-img-emoji' />
                    <img className='gW-corner-imges-img-confidentSmile' src={confidentSmile} alt='corner-img-emoji' />
                    <img className='gW-corner-imges-img-cowboy' src={cowboy} alt='corner-img-emoji' />
                    <img className='gW-corner-imges-img-crazy' src={crazy} alt='corner-img-emoji' />
                    <img className='gW-corner-imges-img-hug' src={hug} alt='corner-img-emoji' />
                    <img className='gW-corner-imges-img-glasesMustage' src={glasesMustage} alt='corner-img-emoji' />
                </div>
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