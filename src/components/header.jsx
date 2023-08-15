import React from 'react';
import './css/header.css';
import ivyPhoto from './media/ivyPhoto.svg';
import savoringFood from './media/gif/savoring-food.gif';
import firecracker from './media/firecracker.svg';
import sparles from './media/sparkles.svg';
import orangeDimond from './media/large-orange-diamond.svg';

const Header = () => {
    return (
        <div>
            <div className='header'>
                <div className='header-left'>
                    <div className='header-left-title'>
                        <span className='header-left-title-span'>
                            Оживи свое растение!
                        </span>
                    </div>
                    <div className='header-left-posttitle'>
                        <span className='header-left-posttitle-span'>
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
                    <div className='header-left-space-button'>
                        <button className='header-left-button'>Давай купи!</button>
                    </div>
                </div>
                <div className='header-right'>
                    <img className='img-ivy' src={ivyPhoto} alt='ivy'/>
                    <img className='img-firecracker' src={firecracker} alt='savor'/>
                    <img className='img-orange-dimond' src={orangeDimond} alt='savor'/>
                    <img className='img-sparles' src={sparles} alt='savor'/>
                    <img className='img-savoring-food' src={savoringFood} alt='savor'/>
                </div>
            </div>
        </div>
    );
};

export default Header;