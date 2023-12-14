import {memo} from "react";
import PropTypes from 'prop-types';
import {cn as bem} from '@bem-react/classname';
import {numberFormat} from "../../utils";
import './style.css';
import { Link } from "react-router-dom";

function Button({text, path}) {
  const cn = bem('Button');
  return (
    <button className={cn()}><Link to={path}>{text}</Link></button>
  );
}

Button.propTypes = {
      text: PropTypes.string.isRequired
};


export default memo(Button);
