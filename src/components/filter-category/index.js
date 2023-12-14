import {memo, useEffect, useState} from "react";
import PropTypes from 'prop-types';
import './style.css';
import { createHierarchy } from "../../utils";

function FilterCategory(props) {

  const onFilter = (e) => {
    console.log(e.target.value)
    props.onChange(e.target.value);
  };
  let categories = createHierarchy(props.options)
  return (
    <select className="Filter" onChange={onFilter}>
        <option  value="">Все</option>
      {categories.map((item)=>{
        if(item.pos== 0) return <option key={item._id}  value={item._id}>{item.title}</option>
        if(item.pos== 1) return <option key={item._id} value={item._id}>-{item.title}</option>
        return<option key={item._id} value={item._id}>--{item.title}</option>
      })}
    </select>
  )
}

FilterCategory.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string
  })).isRequired,
  onChange: PropTypes.func
};

FilterCategory.defaultProps = {
  onChange: () => {
  }
}

export default memo(FilterCategory);
