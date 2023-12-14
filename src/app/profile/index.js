import {memo} from 'react';
import useStore from '../../hooks/use-store';
import LoginForm from '../../components/login-form';
import PageLayout from '../../components/page-layout';
import Head from '../../components/head';
import useTranslate from "../../hooks/use-translate";
import LocaleSelect from '../../containers/locale-select';
import Navigation from '../../containers/navigation';
import Button from '../../components/button';
import useSelector from '../../hooks/use-selector';
import AboutUser from "../../components/about_user"
/**
 * Приложение
 * Маршрутизация по страницам и модалкам
 */
function Profile() {

  const {t} = useTranslate();
  const store = useStore();
  console.log(store)
  const select = useSelector(state => ({
    info: store.state.auth.data
  }));


  return (
    <PageLayout head={<Button text="Вход" path={"/login"}/>}>
       <Head title={t('title')}>
        <LocaleSelect/>
      </Head>
      <Navigation/>
      <AboutUser info={select.info}/>
    </PageLayout>
  );
}

export default memo(Profile);
