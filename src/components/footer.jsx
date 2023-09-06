import React from 'react';
import './css/footer.css';
import cat from './media/gif/wow-cat.gif';

const Footer = () => {
    return (
        <div className='FOOTER-MAIN'>
            <div className='footer'>
                <img className='footer-img-cat' 
                     src={cat}
                     alt='cat-wow'
                />
                <div className='footer-elements-block'>
                    <div className='footer-elements-block-text-block'>
                        <div className='footer-elements-block-text-block-title'>
                            ДЛЯ СВЯЗИ
                        </div>
                        <div className='footer-elements-block-text-block-subtitle'>
                            https://t.me/a_mew
                        </div>
                    </div>
                    <div className='footer-elements-block-text-vertical-line'></div>
                    <div className='footer-elements-block-text-block'>
                        <div className='footer-elements-block-text-block-title'>
                            ДЛЯ СВЯЗИ
                        </div>
                        <div className='footer-elements-block-text-block-subtitle'>
                            https://t.me/a_mew
                        </div>
                    </div>
                    <div className='footer-elements-block-text-vertical-line'></div>
                    <div className='footer-elements-block-text-block'>
                        <div className='footer-elements-block-text-block-title'>
                            ДЛЯ СВЯЗИ
                        </div>
                        <div className='footer-elements-block-text-block-subtitle'>
                            https://t.me/a_mew
                        </div>
                    </div>
                    <div className='footer-elements-block-text-vertical-line'></div>
                    <div className='footer-elements-block-text-block'>
                        <div className='footer-elements-block-text-block-title'>
                            ДЛЯ СВЯЗИ
                        </div>
                        <div className='footer-elements-block-text-block-subtitle'>
                            https://t.me/a_mew
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;