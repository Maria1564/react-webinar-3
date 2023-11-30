import React from 'react'
import PropTypes from 'prop-types';

import "./style.css"


function ModalItem(props){
  console.log(props)
  return (
    <div className={'ModalItem'}>
      <div className='ModalItem-code'>{props.item.code}</div>
      <div className='ModalItem-title'>
        {props.item.title}
      </div>
      <p>
        {new Intl.NumberFormat("ru", {style: "currency", currency: "RUB", minimumFractionDigits: 0}).format(props.item.price)}
      </p>
      <p className='ModalItem-total'>
        {props.item.count}шт
      </p>
      <div className='ModalItem-actions'>
        <button onClick={()=>{props.onDelete(props.item.code)}}>
          Удалить
        </button>
      </div>
    </div>
  );
}

ModalItem.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    count: PropTypes.number
  }).isRequired,
  onDelete: PropTypes.func
};

ModalItem.defaultProps = {
  onDelete: () => {
  },
}

export default React.memo(ModalItem)