import {memo} from "react";
import PropTypes from 'prop-types';
import {cn as bem} from '@bem-react/classname';
import {numberFormat} from "../../utils";

import './style.css';

function AboutProduct({info, addToBasket}) {
  const cn = bem('AboutProduct');
  return (
    <div className={cn()}>
      <div className={cn('wrapper')}>
            <p className={cn('description')}>{info.description}</p>
            <p>Страна производитель: <span>{info.madeIn.title}</span></p>
            <p>Категория: <span>{info.category.title}</span></p>
            <p>Год выпуска: <span>{info.edition}</span></p>
            <p className={cn('price')}>Цена:  {numberFormat(info.price)} ₽</p>
            <button onClick={()=> addToBasket(info._id)}>Добавить</button>
        </div>
    </div>
  );
}

AboutProduct.propTypes = {
  info: PropTypes.shape({
    _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    edition: PropTypes.number,
    category:PropTypes.shape({title:PropTypes.string}),
    madeIn: PropTypes.shape({title:PropTypes.string})
  }).isRequired,
  addToBasket: PropTypes.func.isRequired
};



export default memo(AboutProduct);
