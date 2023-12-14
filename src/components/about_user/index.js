import {memo} from 'react';

/**
 * Приложение
 * Маршрутизация по страницам и модалкам
 */
function AboutUser({info}) {
  console.log(info)

  return (
    <div>
      <h2>Профиль</h2>
      <p>Имя: <span>{info.profile.name}</span></p>
      <p>Телефон: <span>{info.profile.phone}</span></p>
      <p>email: <span>{info.email}</span></p>

    </div>
  );
}

export default memo(AboutUser);
