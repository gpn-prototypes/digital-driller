import React, { useState } from 'react';

import './SelectWrap.css';

function SelectWrap(props) {
  const { size = 'm', form = 'default', items, view, placeholder, className='', ...rest } = props;
  const [ filled, setFilled ] = useState(placeholder ? true : false);

  const styles = `select select_size_${size} select_form_${form} ${filled ? 'select_filled' : '' } ${className}`;
  let options = items.map((item, index) => {
    return <option value={item} key={index}>{item}</option> 
  });

  return (
    <div className={`selectWrap${view ? ` selectWrap_view_${view}`: ''}`}>
      <select className={styles} {...rest} onChange={ () => setFilled(false) }>
        {placeholder ? <option value={placeholder} disabled selected>{placeholder}</option> : ''}
        {options}
      </select>
    </div>
  );
}

export default SelectWrap;
