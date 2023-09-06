import React from 'react';
import './css/header.css';
import ivyPhoto from './media/ivyPhoto.svg';
import savoringFood from './media/gif/savoring-food.gif';
import firecracker from './media/firecracker.svg';
import sparles from './media/sparkles.svg';
import orangeDimond from './media/large-orange-diamond.svg';

const Header = () => {
    return (
        <div className='HEADER-MAIN'>
            <div className='header'>
                <div className='header-left'>
                    <div className='header-left-title'>
                        <span className='header-left-title-span'>
                            Оживи свое растение!
                        </span>
                    </div>
                    <div className='header-left-subtitle'>
                        <span className='header-left-subtitle-span'>
                            Подари себе общение со 
                            своим комнатным растением 
                            через эмоциональную связь. 
                            <br></br>
                            <br></br> 
                            Создай живого домашнего 
                            питомца с помощью эмоционального 
                            цветочного горшка. 
                            Подари заботу своему растению!
                        </span>
                    </div>
                    <div className='header-left-button-block'>
                        <button className='header-left-button-itself'>Давай купи!</button>
                    </div>
                </div>
                <div className='header-right'>
                    <img className='header-right-img-ivy' src={ivyPhoto} alt='ivy'/>
                    <img className='header-right-img-firecracker' src={firecracker} alt='firecracker'/>
                    <img className='header-right-img-orange-dimond' src={orangeDimond} alt='orange-dimond'/>
                    <img className='header-right-img-sparles' src={sparles} alt='sparles'/>
                    <img className='header-right-img-savoring-food' src={savoringFood} alt='savor'/>
                </div>
            </div>
        </div>
    );
};

export default Header;