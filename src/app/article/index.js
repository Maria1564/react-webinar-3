import {memo, useCallback, useMemo} from 'react';
import {useParams} from "react-router-dom";
import useStore from "../../hooks/use-store";
import useSelector from "../../hooks/use-selector";
import useTranslate from "../../hooks/use-translate";
import useInit from "../../hooks/use-init";
import PageLayout from "../../components/page-layout";
import Head from "../../components/head";
import Navigation from "../../containers/navigation";
import Spinner from "../../components/spinner";
import ArticleCard from "../../components/article-card";
import LocaleSelect from "../../containers/locale-select";
import Button from '../../components/button';
import HeaderLayout from '../../components/header-layout';


/**
 * Страница товара с первичной загрузкой товара по id из url адреса
 */
function Article() {
  const store = useStore();

  // Параметры из пути /articles/:id
  const params = useParams();

  useInit(() => {
    store.actions.article.load(params.id);
  }, [params.id]);

  useInit(() => {
    token && store.actions.auth.getInfoUser(token);
  }, [], true);

  const select = useSelector(state => ({
    article: state.article.data,
    waiting: state.article.waiting,
    info: store.state.auth.data
  }));

  const {t} = useTranslate();
  const token = localStorage.getItem("token")

  const callbacks = {
    // Добавление в корзину
    addToBasket: useCallback(_id => store.actions.basket.addToBasket(_id), [store]),
    //Выход из учётной записи
    onLogout: (token) => store.actions.auth.logout(token)
  }

  return (
    <PageLayout head={localStorage.getItem("token") ?
    <HeaderLayout margin='left'  isAuth={true} name={select.info.name}><Button text="Выход" path={"/login"} token={token} onLogout={callbacks.onLogout}/></HeaderLayout>
    : <HeaderLayout margin='left'><Button text="Вход" path={"/login"}/></HeaderLayout>}>
      <Head title={select.article.title}>
        <LocaleSelect/>
      </Head>
      <Navigation/>
      <Spinner active={select.waiting}>
        <ArticleCard article={select.article} onAdd={callbacks.addToBasket} t={t}/>
      </Spinner>
    </PageLayout>
  );
}

export default memo(Article);
