import {memo} from 'react';
import {cn as bem} from '@bem-react/classname';
import PropTypes from 'prop-types';
import './style.css';

/**
 * Приложение
 * Маршрутизация по страницам и модалкам
 */
function AboutUser({info, email}) {
  const cn = bem('AboutUser');

  return (
    <div className={cn()}>
      <h2>Профиль</h2>
      <p>Имя: <span >{info.name}</span></p>
      <p>Телефон: <span >{info.phone}</span></p>
      <p>email: <span >{email}</span></p>

    </div>
  );
}

AboutUser.propTypes = {
  info: PropTypes.shape({
    name: PropTypes.string,
    phone: PropTypes.string
  }).isRequired,
  email: PropTypes.string.isRequired
};


export default memo(AboutUser);
