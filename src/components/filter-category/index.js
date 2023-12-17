import {memo} from "react";
import PropTypes from 'prop-types';
import './style.css';
import { createHierarchy } from "../../utils";

function FilterCategory(props) {
  const onFilter = (e) => {
    props.onChange(e.target.value);
  };
  let categories = createHierarchy(props.options, 0)
  return (
    <select className="Filter" onChange={onFilter} value={props.value}>
          <option  value="">Все</option>
        {categories.map((item)=>{
          return<option key={item._id} value={item._id}>{"- ".repeat(item.pos)} {item.title}</option>
        })}
    </select>
  )
}

FilterCategory.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string
  })).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func
};

FilterCategory.defaultProps = {
  onChange: () => {
  }
}

export default memo(FilterCategory);
