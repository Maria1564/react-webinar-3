import React from 'react'
import PropTypes from 'prop-types';
import "./style.css"
import ModalItem from '../modal-item'


function ModalList({cart, onDelete}){
  return (
    <div className='ModalList'>
      {
        cart.map(item =>
          <div key={item.code} className='ModalList-item'>
            <ModalItem item={item} onDelete={onDelete}/>
          </div>
          )
      }

    </div>
  )
}

ModalList.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number
  })).isRequired,
  onDelete: PropTypes.func
};

ModalList.defaultProps = {
  onDelete: () => {},
}


export default React.memo(ModalList)