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
    store.actions.auth.getInfoUser(localStorage.getItem('token'));
  }, [], true);


  const {t} = useTranslate();
  const store = useStore();
  const select = useSelector(state => ({
    info: store.state.auth.data
  }));
  const email = localStorage.getItem('email')

  return (
    <PageLayout head={localStorage.getItem("token") ?
      <HeaderLayout margin='left'  isAuth={true} name={select.info.name}><Button text="Выход" path={"/profile"}/></HeaderLayout>
      : <HeaderLayout margin='left'><Button text="Вход" path={"/login"}/></HeaderLayout>}>
       <Head title={t('title')}>
        <LocaleSelect/>
      </Head>
      <Navigation/>
      <AboutUser info={select.info} email={email}/>
    </PageLayout>
  );
}

export default memo(Profile);
