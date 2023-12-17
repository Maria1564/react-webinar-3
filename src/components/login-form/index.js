import {memo, useLayoutEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.css';

/**
 * Главная страница - первичная загрузка каталога
 */
function LoginForm({warning, onSign}) {
  const sign = (e)=>{
    const mainDiv = e.currentTarget.closest("div")
    const name = mainDiv.querySelector(".inpName").value
    const pass = mainDiv.querySelector(".inpPass").value
    onSign(name,pass)

  }

  return (
    <div className='LoginForm'>
      <h2>Вход</h2>
      <div className='login'>
        <label>Логин</label>
        <input className='inpName'/>
      </div>
      <div className='password'>
        <label>Пароль</label>
        <input className='inpPass' type='password'/>
      </div>
      {warning && <p className='warning'>Текст ошибки от сервера</p>}
        <button><Link onClick={sign} to={"/login"}>Войти</Link></button>
    </div>
  );
}

LoginForm.propTypes = {
  warning: PropTypes.bool
};

LoginForm.defaultProps = {
  warning: null
};

export default memo(LoginForm);
