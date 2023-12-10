import {memo} from "react";
import PropTypes from "prop-types";
import {cn as bem} from '@bem-react/classname';
import { Link } from "react-router-dom";

import './style.css';

function Menu() {

  const cn = bem('Menu');
  return (
    <div className={cn()}>
      <Link to='/' className={cn('link')}>Главная</Link>
    </div>
  );
}

export default memo(Menu);
