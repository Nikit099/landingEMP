import React from 'react';
import './css/makePreorder.css';
import nestingDolls from './media/nesting-dolls.svg';
import ivyStraingMakePreorder from './media/ivy-make-preorder.svg';
import moduleMakePreorder from './media/module.svg';

const MakePreorder = ({order, setOrder}) => {
    return (
        <div className='makePreorder'> 
            <div>
                {order.map(elem => <input type='text' value={elem.body}  />)}    
            </div>
            <div className='mP-main'>
                <div className='mP-main-left'>
                    <div className='mP-main-left-title-block'>
                        <div className='mP-main-left-title-block-title'>
                            Сделать предзаказ!
                        </div>
                        <div className='mP-main-left-title-block-subtitle'>
                            Закажите прямо сейчас и получите матрешку в подарок!
                        </div>
                    </div>
                    <div className='mP-main-left-inputs-block'>
                        <div className='mP-main-left-inputs-block-email'>
                            <input className='mP-main-left-inputs-block-email-itself'
                                   placeholder='Введите Email'>

                            </input>
                        </div>
                        <div className='mP-main-left-inputs-block-tg'>
                            <input className='mP-main-left-inputs-block-tg-itself'
                                   placeholder='Введите Telegram'>
                                
                            </input>
                        </div>
                    </div>
                </div>
                <div className='mP-main-right'>
                    <img className='mP-main-right-img-ivy' 
                         src={ivyStraingMakePreorder} 
                         alt='ivy'
                    />
                    <img className='mP-main-right-img-module' 
                         src={moduleMakePreorder}
                         alt='module'
                    />
                    <img className='mP-main-right-img-dolle'
                         src={nestingDolls}
                         alt='dolle' 
                    />                   
                </div>
            </div>
        </div>
    );
};

export default MakePreorder;