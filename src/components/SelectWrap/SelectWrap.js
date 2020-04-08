import React from 'react';

import './SelectWrap.css';

function SelectWrap(props) {
  const { size, form, items, view, className='', ...rest } = props;
  const styles = `select ${size ? `select_size_${size}` : ''} ${form ? `select_form_${form}` : ''} ${className}`;
  let options = items.map(item => {
    return <option value={item}>{item}</option> 
  });

  return (
    <div className={`selectWrap ${view ? `selectWrap_view_${view}`: ''}`}>
      <select class={styles} {...rest}>
        {options}
      </select>
    </div>
  );
}

export default SelectWrap;
