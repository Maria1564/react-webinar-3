import React from "react";
import PropTypes from 'prop-types';
import {plural} from "../../utils";
import './style.css';

function Controls({getTotalProducts, setShowModal}) {

  const totalProducts = getTotalProducts()

  return (
    <div className='Controls'>
      <div className="Controls-info">
        В корзине: <span>{totalProducts.total ? `${totalProducts.total} ${plural(totalProducts.total, {
        one: 'товар',
        few: 'товара',
        many: 'товаров'
      })} /  ${new Intl.NumberFormat("ru", {style: "currency", currency: "RUB", minimumFractionDigits: 0}).format(totalProducts.sum)}`: "пусто"}</span>
      </div>
      <button onClick={()=>{setShowModal(true)}}>Перейти</button>
    </div>
  )
}

Controls.propTypes = {
  getTotalProducts: PropTypes.func,
  setShowModal: PropTypes.func.isRequired
};

Controls.defaultProps = {
  getTotalProducts: () => {}
}

export default React.memo(Controls);
