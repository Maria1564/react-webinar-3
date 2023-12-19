import {memo} from 'react';
import useStore from '../../hooks/use-store';
import PageLayout from '../../components/page-layout';
import Head from '../../components/head';
import useTranslate from "../../hooks/use-translate";
import LocaleSelect from '../../containers/locale-select';
import Navigation from '../../containers/navigation';
import Button from '../../components/button';
import useSelector from '../../hooks/use-selector';
import AboutUser from "../../components/about_user"
import useInit from "../../hooks/use-init";
import HeaderLayout from '../../components/header-layout';

/**
 * Приложение
 * Маршрутизация по страницам и модалкам
 */
function Profile() {
  useInit(() => {
    token && store.actions.auth.getInfoUser(token);
  }, [], true);


  const {t} = useTranslate();
  const store = useStore();
  const select = useSelector(state => ({
    info: store.state.auth.data
  }));

  const email = localStorage.getItem('email')
  const token = localStorage.getItem("token")

  const callbacks = {
    //Выход из учётной записи
    onLogout: (token) => store.actions.auth.logout(token)
  }

  return (
    <PageLayout head={token ?
      <HeaderLayout  isAuth={true} name={select.info.name}><Button text="Выход" path={"/login"} token={token} onLogout={callbacks.onLogout}/></HeaderLayout>
      : <HeaderLayout ><Button text="Вход" path={"/login"}/></HeaderLayout>}>
       <Head title={t('title')}>
        <LocaleSelect/>
      </Head>
      <Navigation/>
      <AboutUser info={select.info} email={email}/>
    </PageLayout>
  );
}

export default memo(Profile);
