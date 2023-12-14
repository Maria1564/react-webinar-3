import {memo, useState} from 'react';
import useStore from '../../hooks/use-store';
import LoginForm from '../../components/login-form';
import PageLayout from '../../components/page-layout';
import Head from '../../components/head';
import useTranslate from "../../hooks/use-translate";
import LocaleSelect from '../../containers/locale-select';
import Navigation from '../../containers/navigation';
import Button from '../../components/button';
import useSelector from '../../hooks/use-selector';


/**
 * Главная страница - первичная загрузка каталога
 */
function Login() {

  const store = useStore();
  const select = useSelector(state => ({
    warning: store.state.auth.warning,
    token: store.state.auth.token
  }));

  const callbacks = {
    onSign:(log, pass) =>{store.actions.auth.sign(log, pass)}
  }

  const {t} = useTranslate();
  return (
    <PageLayout head={<Button text="Вход" path={"/login"}/>}>
       <Head title={t('title')}>
        <LocaleSelect/>
      </Head>
      <Navigation/>
      {select.token == "" ?
      <LoginForm  warning={select.warning} onSign={callbacks.onSign} path={"/login"}/>:
      <LoginForm  warning={select.warning} onSign={callbacks.onSign} path={"/profile"}/>
    }

    </PageLayout>
  );
}

export default memo(Login);
