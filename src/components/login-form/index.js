import {memo, useEffect} from 'react';
import useStore from "../../hooks/use-store";
import useTranslate from "../../hooks/use-translate";
import useInit from "../../hooks/use-init";
import Navigation from "../../containers/navigation";
import PageLayout from "../../components/page-layout";
import Head from "../../components/head";
import CatalogFilter from "../../containers/catalog-filter";
import CatalogList from "../../containers/catalog-list";
import LocaleSelect from "../../containers/locale-select";
import Button from '../../components/button';
import { Link } from 'react-router-dom';

/**
 * Главная страница - первичная загрузка каталога
 */
function LoginForm({warning, onSign, path}) {
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
      <Link onClick={sign} to={path}>Войти</Link>
    </div>
  );
}

export default memo(LoginForm);
