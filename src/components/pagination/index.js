import {memo} from "react";
import PropTypes from "prop-types";
import {cn as bem} from '@bem-react/classname';
import './style.css';

import {selectPage} from "../../utils"

function Pagination({page, setPage}) {

  const cn = bem('Pagination');

  return (
    <div className={cn()}>
      <div className={cn('items')}>
        <a className={page === 1  ? 'active':''}>1</a>
        {
          selectPage(page).map(item => {
            if(item === "...") <p key={item}>...</p>
            return  <a key={item} className={page === item ? 'active':''} >{item}</a>
          })
        }
        <a className={page === 25  ? 'active':''}>25</a>
      </div>
    </div>
  );
}



export default memo(Pagination);
