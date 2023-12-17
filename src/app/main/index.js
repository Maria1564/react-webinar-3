import {memo} from 'react';
import useStore from "../../hooks/use-store";
import useSelector from "../../hooks/use-selector";
import useTranslate from "../../hooks/use-translate";
import useInit from "../../hooks/use-init";
import Navigation from "../../containers/navigation";
import PageLayout from "../../components/page-layout";
import Head from "../../components/head";
import CatalogFilter from "../../containers/catalog-filter";
import CatalogList from "../../containers/catalog-list";
import LocaleSelect from "../../containers/locale-select";
import Button from '../../components/button';
import HeaderLayout from '../../components/header-layout';



/**
 * Главная страница - первичная загрузка каталога
 */
function Main() {
  const store = useStore();
  const select = useSelector(state => ({
    info: store.state.auth.data
  }));
  useInit(() => {
    store.actions.catalog.initParams();
    store.actions.auth.getInfoUser(localStorage.getItem('token'));
  }, [], true);

  const {t} = useTranslate();
  return (
    <PageLayout head={localStorage.getItem("token") ?
    <HeaderLayout margin='left'  isAuth={true} name={select.info.name}><Button text="Выход" path={"/profile"}/></HeaderLayout>
    : <HeaderLayout margin='left'><Button text="Вход" path={"/login"}/></HeaderLayout>}>
      <Head title={t('title')}>
        <LocaleSelect/>
      </Head>
      <Navigation/>
      <CatalogFilter/>
      <CatalogList/>
    </PageLayout>
  );
}

export default memo(Main);
