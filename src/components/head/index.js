import React from "react";
import PropTypes from "prop-types";
import './style.css';

function Head({title, isModal,  setShowModal}) {
  return (
    <div className='Head'>
      <h1>{title}</h1>
      {isModal && <button className="Head-btn" onClick={()=>setShowModal(false)}>Закрыть</button>}
    </div>
  )
}

Head.propTypes = {
  title: PropTypes.node,
  isModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func
};

Head.defaultProps = {
  setShowModal: () => {}
}


export default React.memo(Head);
