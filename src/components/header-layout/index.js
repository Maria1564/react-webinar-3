import React, {memo} from "react";
import PropTypes, { bool } from 'prop-types';
import {cn as bem} from '@bem-react/classname';
import './style.css';
import { Link } from "react-router-dom";

function HeaderLayout({children, isAuth, name}) {
  const cn = bem('HeaderLayout');
  return (
    <div className={cn()}>
      {isAuth && <Link to={"/profile"}>{name}</Link>}
      {React.Children.map(children, (child) => (
        <div key={child.key} className={cn('item')}>{child}</div>
      ))}
    </div>
  );
}

HeaderLayout.propTypes = {
  children: PropTypes.node,
  isAuth: PropTypes.bool,
  name: PropTypes.string
}

HeaderLayout.defaultProps = {
  isAuth: false,
  name: ""
};

export default memo(HeaderLayout);
