import {memo} from "react";
import PropTypes from 'prop-types';
import {cn as bem} from '@bem-react/classname';
import {numberFormat} from "../../utils";
import './style.css';
import { Link } from "react-router-dom";

function Button({text, path, token, onLogout}) {
  const cn = bem('Button');
  return (
    <button className={cn()} onClick={()=> onLogout(token)}><Link to={path}>{text}</Link></button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  token: PropTypes.string,
  onLogout: PropTypes.func
};


Button.defaultProps = {
  token: null,
  onLogout: ()=>{}
};

export default memo(Button);
