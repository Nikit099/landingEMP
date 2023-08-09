import React from 'react';
import './css/header.css';
import ivyPhoto from './media/ivyPhoto.svg';

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
                    <img className='header-right-img' src={ivyPhoto} alt='ivy'>

                    </img>
                </div>
            </div>
        </div>
    );
};

export default Header;