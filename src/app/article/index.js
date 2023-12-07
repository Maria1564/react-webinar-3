import {memo, useCallback, useEffect, useState} from 'react';
import PageLayout from "../../components/page-layout";
import Head from "../../components/head";
import BasketTool from "../../components/basket-tool";
import useSelector from "../../store/use-selector";
import useStore from '../../store/use-store';
import { useParams } from 'react-router';
import {numberFormat} from "../../utils";
import {cn as bem} from '@bem-react/classname';
import './style.css';


function Article() {
  const cn = bem('Article');
  const store = useStore()

  const [info, setInfo] = useState({})  //информация о товаре
  const {id} = useParams()

  useEffect(()=>{
    //Получение данных о выбранном товаре
    const loadInfo = async(id) => {
      const response = await fetch(`/api/v1/articles/${id}?fields=title,description,edition,price ,madeIn(title,code),category(title)`)
      const json = await response.json()
      setInfo(json.result)
    }
    loadInfo(id)
  }, [id])
  console.log(info)

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
        Object.keys(info).length !== 0 &&
        <div className={cn('wrapper')}>
            <p className={cn('description')}>{info.description}</p>
            <p>Страна производитель: <span>{info.madeIn.title}</span></p>
            <p>Категория: <span>{info.category.title}</span></p>
            <p>Год выпуска: <span>{info.edition}</span></p>
            <p className={cn('price')}>Цена:  {numberFormat(info.price)} ₽</p>
            <button onClick={()=> callbacks.addToBasket(info._id)}>Добавить</button>
        </div>
      }
    </PageLayout>

  );
}

export default memo(Article);
