import {memo, useLayoutEffect, useState} from 'react';
import { Link } from 'react-router-dom';

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
    <div>
      <h2>Вход</h2>
      <div className='login'>
        <label>Логин</label>
        <input className='inpName'/>
      </div>
      <div className='password'>
        <label>пароль</label>
        <input className='inpPass'/>
      </div>
      {warning && <p className='warning'>Текст ошибки от сервера</p>}
        <Link onClick={sign} to={"/login"}>Войти</Link>
    </div>
  );
}

export default memo(LoginForm);
