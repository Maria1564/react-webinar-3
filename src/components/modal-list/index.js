import React from 'react'
import PropTypes from 'prop-types';
import "./style.css"
import ModalItem from '../modal-item'


function ModalList({cart}){
  return (
    <div className='ModalList'>
      {
        cart.map(item =>
          <div key={item.code} className='ModalList-item'>
            <ModalItem item={item}/>
          </div>
          )
      }

    </div>
  )
}

ModalList.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number
  })).isRequired
};

export default React.memo(ModalList)