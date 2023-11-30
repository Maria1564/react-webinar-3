import React from "react";
import PropTypes from "prop-types";
import './style.css';

function Head({title, isModal}) {
  return (
    <div className='Head'>
      <h1>{title}</h1>
      {isModal && <button className="Head-btn">Закрыть</button>}
    </div>
  )
}

Head.propTypes = {
  title: PropTypes.node,
  isModal: PropTypes.bool.isRequired
};

export default React.memo(Head);
