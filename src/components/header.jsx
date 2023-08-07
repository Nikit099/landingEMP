import React from 'react';
import './css/header.css';

const Header = () => {
    return (
        <div>
            <div className='header'>
                <div className='header-left'>
                    <div className='header-left-title'>
                        <span>Оживи свое растение!</span>
                    </div>
                    <div className='header-left-posttitle'>
                        <span>
                            Подари себе общение со 
                            своим комнатным растением 
                            через эмоциональную связь. 
                            Создай живого домашнего 
                            питомца с помощью эмоционального 
                            цветочного горшка. 
                            Подари заботу своему растению!
                        </span>
                    </div>
                    <div className='header-left-button'>
                        <button>Давай купи!</button>
                    </div>
                </div>
                <div className='header-right'>

                </div>
            </div>
        </div>
    );
};

export default Header;