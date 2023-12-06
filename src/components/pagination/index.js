import {memo} from "react";
import PropTypes from "prop-types";
import {cn as bem} from '@bem-react/classname';
import './style.css';

import {selectPage} from "../../utils"

function Pagination({page, setPage}) {

  const cn = bem('Pagination');

  return (
    <div className={cn()}>
      <div className={cn('pages')}>
        <a className={page === 1  ? `active ${cn('page')}`:cn('page')}>1</a>
        {
          selectPage(page).map((item, index) => {
            console.log(item == "...")
            if(item == "...") return <span key={index} className={cn('interval')}>...</span>
            return  <a key={index} className={page === item ? `active ${cn('page')}`:cn('page')} >{item}</a>
          })
        }
        <a className={page === 25  ? `active ${cn('page')}`:cn('page')}>25</a>
      </div>
    </div>
  );
}



export default memo(Pagination);
