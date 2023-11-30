import React, {useState} from "react";
import PropTypes from "prop-types";
import './style.css';

function Item(props) {

  // кол-во товара, добавленого в корзину
  const [count, setCount] = useState(1);

  const callbacks = {
    onAdd: (item)=>{
      item.count = count
      props.onAdd(item)
      setCount(count+1)
    }
  }

  return (
    <div className={'Item'}>
      <div className='Item-code'>{props.item.code}</div>
      <div className='Item-title'>
        {props.item.title}
      </div>
      <p>
        {new Intl.NumberFormat("ru", {style: "currency", currency: "RUB", minimumFractionDigits: 0}).format(props.item.price)}
      </p>
      <div className='Item-actions'>
        <button onClick={()=>callbacks.onAdd(props.item)}>
          Добавить
        </button>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number
  }).isRequired,
  onAdd: PropTypes.func
};

Item.defaultProps = {
  onAdd: () => {
  },
}

export default React.memo(Item);
