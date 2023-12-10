import {memo, useCallback, useEffect, useState} from 'react';
import PageLayout from "../../components/page-layout";
import Head from "../../components/head";
import BasketTool from "../../components/basket-tool";
import useSelector from "../../store/use-selector";
import useStore from '../../store/use-store';
import { useParams } from 'react-router';
import './style.css';
import AboutProduct from '../../components/about-product';


function Article() {
  const store = useStore()

  const [info, setInfo] = useState({})  //информация о товаре
  const {id} = useParams()

  useEffect(() => {
    const page = localStorage.getItem('currentPage');
    store.actions.catalog.load(page);
  }, []);

  useEffect(()=>{
    //Получение данных о выбранном товаре
    const loadInfo = async(id) => {
      const response = await fetch(`/api/v1/articles/${id}?fields=title,description,edition,price ,madeIn(title,code),category(title)`)
      const json = await response.json()
      setInfo(json.result)
    }
    loadInfo(id)
  }, [id])

  const select = useSelector(state => ({
    amount: state.basket.amount,
    sum: state.basket.sum
  }))

  const callbacks = {
    // Открытие модалки корзины
    openModalBasket: useCallback(() => store.actions.modals.open('basket'), [store]),
    // Добавление в корзину
    addToBasket: useCallback(_id => store.actions.basket.addToBasket(_id), [store]),
  }


  return (
    <PageLayout>
      <Head title={info.title}/>
      <BasketTool onOpen={callbacks.openModalBasket} amount={select.amount}
                  sum={select.sum}/>
      {
        Object.keys(info).length !== 0 && <AboutProduct info={info} addToBasket={callbacks.addToBasket}/>
      }
    </PageLayout>

  );
}

export default memo(Article);
