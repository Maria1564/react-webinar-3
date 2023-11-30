import React from 'react'
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
        <button>
          Удалить
        </button>
      </div>
    </div>
  );
}

export default React.memo(ModalItem)