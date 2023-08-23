import React from 'react';

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
                            <input className='mP-main-left-inputs-block-email-itself'></input>
                        </div>
                        <div className='mP-main-left-inputs-block-tg'>
                            <input className='mP-main-left-inputs-block-tg-itself'></input>
                        </div>
                    </div>
                </div>
                <div className='mP-main-right'>

                </div>
            </div>
        </div>
    );
};

export default MakePreorder;