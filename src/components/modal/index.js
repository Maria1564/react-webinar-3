import React from 'react'
import PropTypes from 'prop-types';
import "./style.css"
import Head from '../head'
import ModalList from '../modal-list'


function Modal({cart, setShowModal}){
  return (
    <div className='Modal'>
      <div className='Modal-wrapper'>
          <Head title="Корзина" isModal={true} setShowModal={setShowModal}/>
          <ModalList cart={cart}/>
      </div>
    </div>
  )
}

Modal.propTypes = {
  cart: PropTypes.array.isRequired,
  setShowModal: PropTypes.func.isRequired
}

export default React.memo(Modal)