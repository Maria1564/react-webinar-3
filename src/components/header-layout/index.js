import React, {memo} from "react";
import PropTypes, { bool } from 'prop-types';
import {cn as bem} from '@bem-react/classname';
import './style.css';
import { Link } from "react-router-dom";

function HeaderLayout({children, margin, isAuth, name}) {
  console.log("dd")
  const cn = bem('HeaderLayout');
  return (
    <div className={cn({margin})}>
      {isAuth && <Link to={"/profile"}>{name}</Link>}
      {React.Children.map(children, (child) => (
        <div key={child.key} className={cn('item')}>{child}</div>
      ))}
    </div>
  );
}

HeaderLayout.propTypes = {
  children: PropTypes.node,
  margin: PropTypes.oneOf(['left', 'right', "center"]).isRequired,
  isAuth: PropTypes.bool,
  name: PropTypes.string
}

HeaderLayout.defaultProps = {
  isAuth: false,
  name: ""
};

export default memo(HeaderLayout);
