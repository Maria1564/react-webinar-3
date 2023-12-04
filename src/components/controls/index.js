import React from "react";
import PropTypes from 'prop-types';
import {plural} from "../../utils";
import './style.css';

function Controls({total, sum, setShowModal}) {

  return (
    <div className='Controls'>
      <div className="Controls-info">
        В корзине: <span>{total ? `${total} ${plural(total, {
        one: 'товар',
        few: 'товара',
        many: 'товаров'
      })} /  ${new Intl.NumberFormat("ru", {style: "currency", currency: "RUB", minimumFractionDigits: 0}).format(sum)}`: "пусто"}</span>
      </div>
      <button onClick={()=>{setShowModal(true)}}>Перейти</button>
    </div>
  )
}

Controls.propTypes = {
  total:PropTypes.number.isRequired,
  sum:PropTypes.number.isRequired,
  setShowModal: PropTypes.func.isRequired
};


export default React.memo(Controls);
