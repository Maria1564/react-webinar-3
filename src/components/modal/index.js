import React from 'react'
import PropTypes from 'prop-types';
import "./style.css"
import Head from '../head'
import ModalList from '../modal-list'


function Modal({cart, setShowModal, onDeleteProduct, getTotalProducts}){
  const sum = getTotalProducts().sum

  return (
    <div className='Modal'>
      <div className='Modal-wrapper'>
          <Head title="Корзина" isModal={true} setShowModal={setShowModal}/>
          <ModalList cart={cart} onDelete={onDeleteProduct}/>
          <p className='Modal-sum'>Итого
          <span>{sum ? new Intl.NumberFormat("ru", {style: "currency", currency: "RUB", minimumFractionDigits: 0}).format(sum): "0 ₽"}</span></p>
      </div>
    </div>
  )
}

Modal.propTypes = {
  cart: PropTypes.array.isRequired,
  setShowModal: PropTypes.func.isRequired,
  onDeleteProduct: PropTypes.func,
  getTotalProducts: PropTypes.func
}

Modal.defaultProps = {
  onDeleteProduct: () => {},
  getTotalProducts: () => {}
}


export default React.memo(Modal)