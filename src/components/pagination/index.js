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
        {
          selectPage(page).map((item, index) => {
            if(item == "...") return <span key={index} className={cn('interval')}>...</span>
            return  <a key={index} className={page === item ? `active ${cn('page')}`:cn('page')} onClick={()=>setPage(item)}>{item}</a>
          })
        }
      </div>
    </div>
  );
}

Pagination.propTypes = {
  page: PropTypes.number,
  setPage: PropTypes.func.isRequired
}

Pagination.defaultProps = {
  page: 1,
  setPage: ()=>{}
}

export default memo(Pagination);
